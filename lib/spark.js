/**
 * @author Mael Nison
 */

define( function ( ) {
	
	/**
	 * @class Spark
	 */
	
	var Spark = function ( ) {
		
		this.ALIVE = 0;
		this.DEAD = 1;
		this.USER = 2;
		
		this.status = this.ALIVE;
		
	};
	
	return Spark;
	
} );
