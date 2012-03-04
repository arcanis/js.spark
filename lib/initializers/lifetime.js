/**
 * @author Mael Nison
 */

define( function ( ) {
	
	var random = Math.random;
	
	/**
	 * @class LifeTime
	 */
	
	var LifeTime = function ( min, max ) {
		
		this.min = min;
		
		this.diff = max - min;
		
	};
	
	/**
	 * 
	 */
	
	LifeTime.prototype.initialize = function ( spark ) {
		
		spark.age = 0;
		
		spark.lifeTime = this.min + random( ) * this.diff;
		
	};
	
	/**
	 *
	 */
	
	LifeTime.prototype.discard = function ( spark ) {
		
		// do nothing
		
	};
	
	return LifeTime;
	
} );
