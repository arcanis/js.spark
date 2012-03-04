window.requestAnimationFrame = ( function ( ) {
	
	if ( window.requestAnimationFrame )
		
		return window.requestAnimationFrame;
	
	if ( window.webkitRequestAnimationFrame )
		
		return window.webkitRequestAnimationFrame;
	
	if ( window.mozRequestAnimationFrame )
		
		return window.mozRequestAnimationFrame;
	
	if ( window.oRequestAnimationFrame )
		
		return window.oRequestAnimationFrame;
	
	if ( window.ieRequestAnimationFrame )
		
		return window.ieRequestAnimationFrame;
	
	return function ( fn ) {
		
		return this.setTimeout( fn, 1000 / 60 );
		
	};
	
} )( );

window.requestAnimationLoop = function ( fn ) {
	
	var wrapper = function ( ) {
		
		this.requestAnimationFrame( wrapper );
		
		fn( );
		
	}.bind( window );
	
	wrapper( );
	
};

require( {
	
	paths : {
		
		// Three.js
		three : 'vendor/three/amd',
		
		// Stats.js
		stats : 'vendor/stats/amd',
		
		// Sparks2.js library path
		sparks : '../lib',
		
		// Require.js plugins
		order : 'vendor/require/order',
		text : 'vendor/require/text',
		domReady : 'vendor/require/domReady'
		
	}
	
} );
