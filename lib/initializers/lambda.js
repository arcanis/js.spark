/**
 * @author Mael Nison
 */

define( function ( ) {
	
	/**
	 * @class
	 */
	
	var Lambda = function ( lambda ) {
		
		this.lambda = lambda;
		
	};
	
	/**
	 * 
	 */
	
	Lambda.prototype.initialize = function ( spark ) {
		
		var lambda = this.lambda;
		
		lambda = typeof lambda === 'function' ? lambda( spark ) : lambda;
		
		if ( typeof lambda === 'undefined' ) {
			
			spark.status = spark.DEATH;
		
		} else {
			
			spark.lambda = lambda;
			
		}
		
	};
	
	/**
	 * 
	 */
	
	Lambda.prototype.discard = function ( spark ) {
		
		// do nothing
		
	};
	
	return Lambda;
	
} );
