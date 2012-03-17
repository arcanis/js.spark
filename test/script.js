require( [ 'three', 'stats', 'spark/zones/batman', 'spark/zones/cuboid', 'spark/zones/line', 'spark/extra/three/helper', 'spark/extra/three/material', './batmanstyle', './starsstyle', 'domReady!' ], function ( Three, Stats, BatmanZone, CuboidZone, LineZone, SparkHelper, SparkMaterial, BatmanStyle, StarsStyle ) {
	
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
	var batmanMaterial = new SparkMaterial( batmanVerticeCount );
	var batmanSparks = new SparkHelper( batmanMaterial, {
		initializers : [ new BatmanStyle( batmanMaterial ) ],
		count : batmanVerticeCount, initial : batmanVerticeCount,
		position : new BatmanZone( 10 ),
		lifeTime : [ 0, 20 ],
		frequency : .004
	} );
	
	var starsVerticeCount = 10000;
	var starsMaterial = new SparkMaterial( starsVerticeCount );
	var starsSparks = new SparkHelper( starsMaterial, {
		initializers : [ new StarsStyle( starsMaterial ) ],
		count : starsVerticeCount,
		position : new CuboidZone( 1000, 200, 20 ),
		velocity : new LineZone( 0, 0, 50 ),
		lifeTime : [ 1.5, 4 ],
		frequency : .0006
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
