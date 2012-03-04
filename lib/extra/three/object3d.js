define( [ 'three', '../../emitter', '../../initializers/lambda', '../../initializers/lifetime', '../../initializers/position', '../../initializers/velocity', '../../actions/age', '../../actions/move', '../../actions/accelerate', '../../actions/excitation', '../../zones/point' ], function ( Three, Emitter, LambdaInitializer, LifeTimeInitializer, PositionInitializer, VelocityInitializer, AgeAction, MoveAction, AccelerateAction, ExcitationAction, PointZone ) {
	
	/**
	 * @class
	 * @extends
	 */
	
	var Object3D = function ( material, options ) {
		
		options = options || { };
		
		var count = 'count' in options ? options.count : 100;
		
		// Generating particles geometry
		
		var pool = this.pool = [ ];
		
		var geometry = new Three.Geometry( );
		
		for ( var t = 0; t < count; ++ t ) {
			
			var inf = Number.POSITIVE_INFINITY;
			
			var particle = new Three.Vertex( new Three.Vector3( inf, inf, inf ) );
			
			geometry.vertices.push( particle );
			
			pool.push( t );
			
		}
		
		// Calling parent constructor
		
		Three.ParticleSystem.call( this, geometry, material );
		
		// todo: why ?
		this.dynamic = true;
		
		// Creating a basic Sparks emitter
		
		var frequency = 'frequency' in options ? options.frequency : .5;
		
		var emitter = this.emitter = new Emitter( frequency );
		
		// Linking sparks particles with three ones
		
		emitter.addInitializer( new LambdaInitializer( function ( ) {
			
			return pool.pop( );
			
		} ) );
		
		// Executing some options
		
		if ( 'position' in options ) {
			
			emitter.addInitializer( new PositionInitializer( options.position ) );
			
		} else {
			
			emitter.addInitializer( new PositionInitializer( new PointZone( 0, 0, 0 ) ) );
			
		}
		
		if ( 'lifeTime' in options ) {
			
			emitter.addInitializer( new LifeTimeInitializer( options.lifeTime[ 0 ], options.lifeTime[ 1 ] ) );
			
			emitter.addAction( new AgeAction( ) );
			
		}
		
		if ( 'velocity' in options ) {
			
			emitter.addInitializer( new VelocityInitializer( options.velocity ) );
			
			if ( 'acceleration' in options ) {
				
				emitter.addAction( new AccelerateAction( options.acceleration[ 0 ], options.acceleration[ 1 ], options.acceleration[ 2 ] ) );
				
			}
			
			if ( 'excitation' in options ) {
				
				emitter.addAction( new ExcitationAction( options.excitation ) );
				
			}
			
			emitter.addAction( new MoveAction( ) );
			
		}
		
		// Adding user initializers & actions
		
		if ( 'initializers' in options ) {
			
			options.initializers.forEach( function ( initializer ) {
				
				emitter.addInitializer( initializer );
				
			} );
			
		}
		
		if ( 'actions' in options ) {
			
			options.actions.forEach( function ( action ) {
				
				emitter.addAction( initializer );
				
			} );
			
		}
		
		// Binding the emitter to the particles managers
		
		emitter.onWake = function ( spark, delta ) {
			
			this.onWake( spark, delta );
			
		}.bind( this );
		
		emitter.onUpdate = function ( spark, delta ) {
			
			this.onUpdate( spark, delta );
			
		}.bind( this );
		
		emitter.onDeath = function ( spark ) {
			
			this.onDeath( spark );
			
		}.bind( this );
		
		// Display initial particles
		
		if ( 'initial' in options ) {
			
			emitter.spawn( options.initial, true );
			
		}
		
	};
	
	var F = function ( ) { };
	F.prototype = Three.ParticleSystem.prototype;
	
	Object3D.prototype = new F( );
	Object3D.prototype.constructor = Object3D;
	
	/**
	 * 
	 */
	
	Object3D.prototype.update = function ( delta ) {
		
		this.emitter.update( delta );
		
	};
	
	/**
	 *
	 */
	
	Object3D.prototype.onWake = function ( spark, delta ) {
		
	};
	
	/**
	 *
	 */
	
	Object3D.prototype.onUpdate = function ( spark, delta ) {
		
		this.geometry.vertices[ spark.lambda ].position.copy( spark.position );
		
		this.geometry.__dirtyVertices = true;
		
	};
	
	/**
	 * 
	 */
	
	Object3D.prototype.onDeath = function ( spark ) {
		
		var inf = Number.POSITIVE_INFINITY;
		
		this.geometry.vertices[ spark.lambda ].position.set( inf, inf, inf );
		
		this.geometry.__dirtyVertices = true;
		
		this.pool.push( spark.lambda );
		
	};
	
	return Object3D;
	
} );
