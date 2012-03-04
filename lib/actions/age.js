/**
 * @author Mael Nison
 */

define( function ( ) {
	
	/**
	 * @exports Age
	 */
	
	/**
	 * @constructor
	 * 
	 * The Age action will kill the sparks at the end of their life times.
	 */
	
	var Age = function ( ) {
		
	};
	
	/**
	 * Age the sparks at each iteration.
	 */
	
	Age.prototype.update = function ( delta, spark ) {
		
		spark.age += delta;
		
		if ( spark.age > spark.lifeTime ) {
			
			spark.status = spark.DEAD;
			
		}
		
	};
	
	return Age;
	
} );
