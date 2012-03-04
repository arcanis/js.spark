/**
 * @author Mael Nison
 */

define( function ( ) {
	
	/**
	 * @exports Accelerate
	 */
	
	/**
	 * @constructor
	 * 
	 * The Accelerate action will change the sparks velocities at each update.
	 */
	
	var Accelerate = function ( x, y, z ) {
		
		this.x = x;
		this.y = y;
		this.z = z;
		
	};
	
	/**
	 */
	
	Accelerate.prototype.update = function ( delta, spark ) {
		
		var velocity = spark.velocity;
		
		velocity.x += delta * this.x;
		velocity.y += delta * this.y;
		velocity.z += delta * this.z;
		
	};
	
	return Accelerate;
	
} );
