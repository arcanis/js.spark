define( [ '../factory' ], function ( Factory ) {
	
	var random = Math.random;
	
	var floor = Math.floor;
	
	var Cuboid = function ( width, height, depth ) {
		
		this.width = width;
		this.height = height;
		this.depth = depth;
		
	};
	
	Cuboid.prototype.getLocation = function ( ) {
		
		var point = Factory.alloc( );
		
		point.x = floor( random( ) * ( this.width + 1 ) ) - this.width / 2;
		point.y = floor( random( ) * ( this.height + 1 ) ) - this.height / 2;
		point.z = floor( random( ) * ( this.depth + 1 ) ) - this.depth / 2;
		
		return point;
		
	};
	
	return Cuboid;
	
} );
