/**
 * @author Mael Nison
 */

define( function ( ) {
	
	/**
	 * @class Spark
	 */
	
	var Spark = function ( ) {
		
		this.status = this.ALIVE;
		
	};
	
	/**
	 * @param status
	 */
	
	Spark.prototype.status = Spark.ALIVE;
	
	/**
	 * @enum Spark#Status
	 */
	
	Spark.prototype.DEAD = 0;
	Spark.prototype.ALIVE = Spark.prototype.DEAD + 1;
	Spark.prototype.USER = Spark.prototype.ALIVE + 1;
	
	return Spark;
	
} );
