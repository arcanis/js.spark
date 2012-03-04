/**
 * @author Mael Nison
 */

define( [ '../factory' ], function ( Factory ) {
	
	/**
	 * @class Velocity
	 */
	
	var Velocity = function ( zone ) {
		
		this.zone = zone;
		
	};
	
	/**
	 * 
	 */
	
	Velocity.prototype.initialize = function ( spark ) {
		
		spark.velocity = this.zone.getLocation( );
		
	};
	
	/**
	 *
	 */
	
	Velocity.prototype.discard = function ( spark ) {
		
		Factory.free( spark.velocity );
		
	};
	
	return Velocity;
	
} );
