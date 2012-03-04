/**
 * @author Mael Nison
 */

define( [ '../factory' ], function ( Factory ) {
	
	/**
	 * @class Position
	 */
	
	var Position = function ( zone ) {
		
		this.zone = zone;
		
	};
	
	/**
	 * 
	 */
	
	Position.prototype.initialize = function ( spark ) {
		
		spark.position = this.zone.getLocation( );
		
	};
	
	/**
	 * 
	 */
	
	Position.prototype.discard = function ( spark ) {
		
		Factory.free( spark.position );
		
	};
	
	return Position;
	
} );
