define( function ( ) {
	
	var Factory = function ( ) {
		
		this.pool = [ ];
		
	};
	
	Factory.prototype.alloc = function ( constructor ) {
		
		if ( ! this.pool.length )
			
			return { };
		
		var obj = this.pool.pop( );
		
		if ( constructor ) {
			
			Object.getOwnPropertyNames( obj ).forEach( function ( name ) { delete obj[ name ]; } );
			
			if ( typeof constructor === 'function' ) {
				
				constructor.call( obj );
				
			}
			
		}
		
		return obj;
		
	};
	
	Factory.prototype.free = function ( o ) {
		
		this.pool.push( o );
		
	};
	
	return new Factory( );
	
} );
