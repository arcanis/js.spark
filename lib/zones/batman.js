define( [ '../factory' ], function ( Factory ) {
	
	var abs = Math.abs;
	var pow = Math.pow;
	var sqrt = Math.sqrt;
	
	var conditions = [
		/*  0 */ function ( x, y ) { return pow( x, 2 ) / 49 + pow( y, 2 ) / 9 - 1 <= 0; },
		/*  1 */ function ( x, y ) { return abs( x ) >= 4; },
		/*  2 */ function ( x, y ) { return - 3 * sqrt( 33 ) / 7 <= y && y <= 0; },
		/*  3 */ function ( x, y ) { return abs( x ) >= 3; },
		/*  4 */ function ( x, y ) { return y >= 0; },
		/*  5 */ function ( x, y ) { return - 3 <= y && y <= 0; },
		/*  6 */ function ( x, y ) { return - 4 <= x && x <= 4; },
		/*  7 */ function ( x, y ) { return abs( x ) / 2 + sqrt( 1 - pow( abs( abs( x ) - 2 ) - 1, 2) ) - 1 / 112 * ( 3 * sqrt( 33 ) - 7 ) * pow( x, 2 ) - y - 3 <= 0; },
		/*  8 */ function ( x, y ) { return y >= 0; },
		/*  9 */ function ( x, y ) { return 3 / 4 <= abs( x ) && abs( x ) <= 1; },
		/* 10 */ function ( x, y ) { return - 8 * abs( x ) - y + 9 >= 0; },
		/* 11 */ function ( x, y ) { return 1 / 2 <= abs( x ) && abs( x ) <= 3 / 4; },
		/* 12 */ function ( x, y ) { return 3 * abs( x ) - y + 3 / 4 >= 0; },
		/* 13 */ function ( x, y ) { return y >= 0; },
		/* 14 */ function ( x, y ) { return abs( x ) <= 1 / 2; },
		/* 15 */ function ( x, y ) { return y >= 0; },
		/* 16 */ function ( x, y ) { return 9 / 4 - y >= 0; },
		/* 17 */ function ( x, y ) { return abs( x ) >= 1; },
		/* 18 */ function ( x, y ) { return y >= 0; },
		/* 19 */ function ( x, y ) { return - abs( x ) / 2 - 3 / 7 * sqrt( 10 ) * sqrt( 4 - pow( abs( x ) - 1, 2 ) ) - y + 6 * sqrt( 10 ) / 7 + 3 / 2 >= 0; }
	];
	
	var sets = [
		[ 0, 1, 2 ],
		[ 3, 4 ],
		[ 5, 6, 7 ],
		[ 8, 9, 10 ],
		[ 11, 12, 13 ],
		[ 14, 15, 16 ],
		[ 17, 18, 19 ]
	];
	
	/**
	 * 
	 */
	
	var Batman = function ( factor ) {
		
		this.factor = typeof factor !== 'undefined' ? factor : 1;
		
	};
	
	/**
	 * 
	 */
	
	Batman.prototype.getLocation = function ( ) {
		
		return this.getUniformLocation( );
		
	};
	
	/**
	 * 
	 */
	
	Batman.prototype.getUniformLocation = function ( ) {
		
		do {
			
			var x = Math.random( ) * 14 - 7;
			var y = Math.random( ) * 7 - 3.5;
			
		} while ( ! this.check( x, y ) );
		
		var point = Factory.alloc( );
		
		point.x = this.factor * x;
		point.y = this.factor * y;
		point.z = 0;
		
		return point;
		
	};
	
	/**
	 * @private
	 */
	
	Batman.prototype.check = function ( x, y ) {
		
		return sets.some( function ( set ) {
			
			return set.every( function ( id ) {
				
				return conditions[ id ]( x, y );
				
			} );
			
		} );
		
	};
	
	return Batman;
	
} );
