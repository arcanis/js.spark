/**
 * @author Mael Nison
 */

define( [ './spark' ], function ( Spark ) {
	
	/**
	 * @class Emitter
	 */
	
	var Emitter = function ( frequency ) {
		
		this.frequency = frequency;
		
		this.delta = 0;
		
		this.initializers = [ ];
		
		this.actions = [ ];
		
		this.sparks = [ ];
		
	};
	
	/**
	 * 
	 */
	
	Emitter.prototype.addInitializer = function ( initializer ) {
		
		this.initializers.push( initializer );
		
	};
	
	/**
	 * 
	 */
	
	Emitter.prototype.removeInitializer = function ( initializer ) {
		
		var initializers = this.initializers;
		
		initializers.splice( initializer.indexOf( initializer ), 1 );
		
	};
	
	/**
	 * 
	 */
	
	Emitter.prototype.addAction = function ( action ) {
		
		this.actions.push( action );
		
	};
	
	/**
	 * 
	 */
	
	Emitter.prototype.removeAction = function ( action ) {
		
		var actions = this.actions;
		
		actions.slice( actions.indexOf( action ), 1 );
		
	};
	
	/**
	 * 
	 */
	
	Emitter.prototype.spawn = function ( count, randomly ) {
		
		var random = Math.random;
		
		for ( var t = 0; t < count; ++ t ) {
			
			var delta = randomly ? random( ) * this.frequency * 2 : 0;
			
			this.createSpark( delta );
			
		}
		
	};
	
	/**
	 * 
	 */
	
	Emitter.prototype.update = function ( delta ) {
		
		// Updating current sparks
		
		var sparks = this.sparks;
		
		for ( var t = sparks.length; t --; ) {
			
			this.updateSpark( delta, t );
			
		}
		
		// Creating new sparks
		
		var frequency = this.frequency;
		
		for ( delta += this.delta; delta > frequency; ) {
			
			this.createSpark( delta -= frequency );
			
		}
		
		// Updating the last creation time
		
		this.delta = delta;
		
	};
	
	/**
	 * 
	 */
	
	Emitter.prototype.onWake = function ( spark ) {
		
	};
	
	/**
	 *
	 */
	
	Emitter.prototype.onDeath = function ( spark ) {
		
	};
	
	/**
	 *
	 */
	
	Emitter.prototype.onUpdate = function ( spark, delta ) {
		
	};
	
	/**
	 * @private
	 */
	
	Emitter.prototype.createSpark = function ( delta ) {
		
		var spark = new Spark( );
		
		this.initializers.forEach( function ( initializer ) { initializer.initialize( spark ); } );
		
		if ( spark.status !== spark.DEATH ) {
			
			this.sparks.unshift( spark );
			
			this.onWake( spark );
			
			this.updateSpark( delta, 0 );
			
		}
		
	};
	
	/**
	 * @private
	 */
	
	Emitter.prototype.updateSpark = function ( delta, t ) {
		
		var sparks = this.sparks;
		
		var spark = sparks[ t ];
		
		this.actions.forEach( function ( action ) { action.update( delta, spark ); } );
		
		if ( spark.status === spark.DEAD ) {
			
			this.removeSpark( t );
			
		} else {
			
			this.onUpdate( spark );
			
		}
		
	};
	
	/**
	 * @private
	 */
	
	Emitter.prototype.removeSpark = function ( t ) {
		
		var spark = this.sparks[ t ];
		
		this.sparks.splice( t, 1 );
		
		this.onDeath( spark );
		
		this.initializers.forEach( function ( initializer ) { initializer.discard( spark ); } );
		
	};
	
	return Emitter;
	
} );
