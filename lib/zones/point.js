/**
 * @author Mael Nison
 */

define( [ '../factory' ], function ( Factory ) {
	
	/**
	 * @class
	 */
	
	var PointZone = function ( x, y, z ) {
		
		this.x = x || 0;
		this.y = y || 0;
		this.z = z || 0;
		
	};
	
	/**
	 * 
	 */
	
	PointZone.prototype.getLocation = function ( ) {
		
		var point = Factory.alloc( );
		
		point.x = this.x;
		point.y = this.y;
		point.z = this.z;
		
		return point;
		
	};
	
	return PointZone;
	
} );
