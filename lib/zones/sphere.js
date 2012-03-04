define( [ '../factory' ], function ( Factory ) {
	
	var random = Math.random;
	
	var round = Math.round;
	
	var sqrt = Math.sqrt;
	var pow = Math.pow;
	
	var cos = Math.cos;
	var sin = Math.sin;
	
	var pi = Math.PI;
	var pi_2 = pi * 2;
	
	/**
	 * @class Sphere
	 */
	
	var Sphere = function ( radius, uniform, inner ) {
		
		this.radius = radius;
		
		this.uniform = typeof uniform !== 'undefined' ? uniform : true;
		
		this.inner = typeof inner !== 'undefined' ? inner : true;
		
	};
	
	/**
	 * 
	 */
	
	Sphere.prototype.getLocation = function ( ) {
		
		if ( this.uniform ) return this.getUniformLocation( );
		
		var r = this.inner ? Math.floor( random( ) * ( this.radius + 1 ) ) : this.radius;
		var p = random( ) * pi_2;
		var t = random( ) * pi;
		
		var point = Factory.alloc( );
		
		point.x = r * cos( p ) * sin( t );
		point.y = r * sin( p ) * sin( t );
		point.z = r * cos( t );
		
		return point;
		
	};
	
	/**
	 * 
	 */
	
	Sphere.prototype.getUniformLocation = function ( ) {
		
		var z = random( ) * 2 - 1;
		var t = random( ) * pi_2;
		
		var r = sqrt( 1 - pow( z, 2 ) );
		var v = this.inner ? pow( random( ), 1 / 3 ) : 1;
		
		var point = Factory.alloc( );
		
		point.x = this.radius * v * r * cos( t );
		point.y = this.radius * v * r * sin( t );
		point.z = this.radius * v * z;
		
		return point;
		
	};
	
	return Sphere;
	
} );
