/**
 * @author Mael Nison
 */

define( function ( ) {
	
	/**
	 * @exports Move
	 */
	
	/**
	 * @constructor
	 * 
	 * The Move action will move sparks according to their velocities.
	 */
	
	var Move = function ( ) {
		
	};
	
	/**
	 * Moves the sparks at each iteration.
	 */
	
	Move.prototype.update = function ( delta, spark ) {
		
		var position = spark.position;
		
		var velocity = spark.velocity;
		
		position.x += velocity.x * delta;
		position.y += velocity.y * delta;
		position.z += velocity.z * delta;
		
	};
	
	return Move;
	
} );
