/**
 * @author Mael Nison
 */

define( [ '../factory' ], function ( Factory ) {
	
	/**
	 * @constructor
	 */
	
	var Excitation = function ( zone ) {
		
		this.zone = zone;
		
	};
	
	/**
	 * 
	 */
	
	Excitation.prototype.update = function ( delta, spark ) {
		
		var velocity = spark.velocity;
		
		var excitation = this.zone.getLocation( );
		
		velocity.x += excitation.x;
		velocity.y += excitation.y;
		velocity.z += excitation.z;
		
		Factory.free( excitation );
		
	};
	
	return Excitation;
	
} );
