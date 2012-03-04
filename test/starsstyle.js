define( function ( ) {
	
	var StarsStyle = function ( material ) {
		
		this.material = material;
		
	};
	
	StarsStyle.prototype.initialize = function ( spark ) {
		
		if ( spark.lambda === undefined )
			
			return ;
		
		this.material.colors[ spark.lambda ].setHSV( 0.56, 0.34, 0.93 );
		this.material.attributes.aColor.needsUpdate = true;
		
		this.material.sizes[ spark.lambda ] = 5;
		this.material.attributes.aSize.needsUpdate = true;
		
	};
	
	StarsStyle.prototype.discard = function ( spark ) {
		
	};
	
	return StarsStyle;
	
} );
