require( [ 'three', 'stats', 'sparks/zones/batman', 'sparks/zones/cuboid', 'sparks/zones/point', 'sparks/extra/three/object3d', 'sparks/extra/three/shader', './batmanstyle', 'starsstyle', 'domReady!' ], function ( Three, Stats, BatmanZone, CuboidZone, PointZone, SparksHelper, SparksShader, BatmanStyle, StarsStyle ) {
	
	var stats = new Stats( );
	stats.getDomElement( ).style.position = 'absolute';
	stats.getDomElement( ).style.left = '0px';
	stats.getDomElement( ).style.top = '0px';
	document.body.appendChild( stats.getDomElement( ) );
	
	var renderer = new Three.WebGLRenderer( );
	document.body.appendChild( renderer.domElement );
	renderer.domElement.style.background = 'black';
	renderer.domElement.style.position = 'absolute';
	renderer.domElement.style.left = '0';
	renderer.domElement.style.top = '0';
	
	var camera = new Three.PerspectiveCamera( 60, 1, .1, 20000 );
	camera.position.z = 100;
	
	var batmanVerticeCount = 5000;
	var batmanMaterial = new SparksShader( batmanVerticeCount );
	var batmanSparks = new SparksHelper( batmanMaterial, {
		initializers : [ new BatmanStyle( batmanMaterial ) ],
		count : batmanVerticeCount, initial : batmanVerticeCount,
		position : new BatmanZone( 10 ),
		lifeTime : [ 0, 20 ],
		frequency : .001
	} );
	
	var starsVerticeCount = 10000;
	var starsMaterial = new SparksShader( starsVerticeCount );
	var starsSparks = new SparksHelper( starsMaterial, {
		initializers : [ new StarsStyle( starsMaterial ) ],
		count : starsVerticeCount,
		position : new CuboidZone( 1000, 200, 20 ),
		velocity : new PointZone( 0, 0, 50 ),
		lifeTime : [ 1.5, 4 ],
		frequency : .0001
	} );
	
	var scene = new Three.Scene( );
	scene.add( camera );
	scene.add( batmanSparks );
	scene.add( starsSparks );
	
	var clock = new Three.Clock( false );
	clock.start( );
	
	window.setInterval( function ( ) {
		
		var delta = clock.getDelta( );
		
		batmanSparks.update( delta );
		starsSparks.update( delta );
		
	}, 1000 / 60 );
	
	window.requestAnimationLoop( function ( ) {
		
		stats.update( );
		
		renderer.render( scene, camera );
		
	} );
	
	window.addEventListener( 'resize', function ( ) {
		
		var resize = function ( ) {
			
			renderer.setSize( window.innerWidth, window.innerHeight );
			
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix( );
			
			return resize;
			
		};
		
		return resize( );
		
	}( ) );
	
	window.addEventListener( 'blur', function ( ) {
		
		console.log( 'blur' );
		
		clock.stop( );
		
	} );
	
	window.addEventListener( 'focus', function ( ) {
		
		console.log( 'focus' );
		
		clock.start( );
		
	} );
	
} );
