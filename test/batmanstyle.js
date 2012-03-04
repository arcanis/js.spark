define( function ( ) {
	
	var BatmanStyle = function ( material ) {
		
		this.material = material;
		
		this.min = 0.50;
		this.max = 0.75;
		
		this.s = this.min;
		
	};
	
	BatmanStyle.prototype.initialize = function ( spark ) {
		
		this.s += .001;
		
		if ( this.s > this.max )
			
			this.s -= this.max - this.min;
		
		if ( spark.lambda === undefined )
			
			return ;
		
		this.material.colors[ spark.lambda ].setHSV( 0.17, this.s, 0.96 );
		this.material.attributes.aColor.needsUpdate = true;
		
		this.material.sizes[ spark.lambda ] = 15;
		this.material.attributes.aSize.needsUpdate = true;
		
	};
	
	BatmanStyle.prototype.discard = function ( spark ) {
		
		// do nothing
		
	};
	
	return BatmanStyle;
	
} );
