define( [ '../factory' ], function ( Factory ) {
	
	var random = Math.random;
	
	var cos = Math.cos;
	var sin = Math.sin;
	
	var pi_2 = Math.PI * 2;
	
	/**
	 * @class Disc
	 */
	
	var Disc = function ( radius, inner ) {
		
		this.radius = radius;
		
		this.inner = inner || false;
		
	};
	
	/**
	 * 
	 */
	
	Disc.prototype.getLocation = function ( ) {
		
		var r = this.inner ? Math.floor( random( ) * ( this.radius + 1 ) ) : this.radius;
		var t = random( ) * pi_2;
		
		var point = Factory.alloc( );
		
		point.x = r * cos( t );
		point.y = r * sin( t );
		point.z = 0;
		
		return point;
		
	};
	
	return Disc;
	
} );
