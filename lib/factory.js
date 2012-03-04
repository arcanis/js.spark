define( function ( ) {
	
	console.log( 1 );
	
	var Factory = function ( ) {
		
		this.pool = [ ];
		
	};
	
	Factory.prototype.alloc = function ( ) {
		
		if ( ! this.pool.length )
			
			return { };
		
		return this.pool.pop( );
		
	};
	
	Factory.prototype.free = function ( o ) {
		
		this.pool.push( o );
		
	};
	
	return new Factory( );
	
} );
