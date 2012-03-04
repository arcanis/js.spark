/**
 * @author Mael Nison
 */

define( [ '../factory' ], function ( Factory ) {
	
	var random = Math.random;
	
	var Line = function ( x, y, z ) {
		
		this.x = x;
		
		this.y = y;
		
		this.z = z;
		
	};
	
	Line.prototype.getLocation = function ( ) {
		
		var r = random( );
		
		var point = Factory.alloc( );
		
		point.x = this.x * r;
		point.y = this.y * r;
		point.z = this.z * r;
		
		return point;
		
	};
	
	return Line;
	
} );
