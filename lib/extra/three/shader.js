define( [ 'three', 'text!./shader.vertex.c', 'text!./shader.fragment.c' ], function ( Three, vertexShaderGlsl, fragmentShaderGlsl ) {
	
	var texture = ( function ( size ) {
		
		var canvas = document.createElement( 'canvas' );
		canvas.width = canvas.height = size;
		
		var context = canvas.getContext( '2d' );
		
		context.fillStyle = "white";
		context.strokeStyle = "white";
		context.beginPath( );
		context.arc( 64, 64, 60, 0, Math.PI * 2, false );
		
		context.closePath( );
		
		context.lineWidth = 0.5;
		context.stroke( );
		
		var gradient = context.createRadialGradient( canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2 );
		
		gradient.addColorStop( 0, 'rgba( 255, 255, 255, 1)' );
		gradient.addColorStop( 0.2, 'rgba( 255, 255, 255, 1)' );
		gradient.addColorStop( 0.4, 'rgba( 128, 128, 128, 1)' );
		gradient.addColorStop( 1, 'rgba( 0, 0, 0, 1 )' );
		
		context.fillStyle = gradient;
		
		context.fill( );
		
		var texture = new Three.Texture( canvas );
		texture.needsUpdate = true;
		
		return texture;
		
	} )( 128 );
	
	/**
	 * @class
	 * @extends
	 */
	
	var Shader = function ( count ) {
		
		this.count = count;
		
		var uniforms = {
			texture : { type : 't', texture : texture },
			color : { type : 'c', value : new Three.Color( 0xffffff ) },
			amplitude : { type : 'f', value : 50 }
		};
		
		var attributes = {
			aColor : { type : 'c', value : [ ] },
			aSize : { type : 'f', value : [ ] }
		};
		
		for ( var t = 0; t < count; ++ t ) {
			
			attributes.aColor.value[ t ] = new Three.Color( 0xff0000 );
			
			attributes.aSize.value[ t ] = 50;
			
		}
		
		Three.ShaderMaterial.call( this, {
			
			uniforms : uniforms,
			attributes : attributes,
			
			vertexShader : vertexShaderGlsl,
			fragmentShader : fragmentShaderGlsl,
			
			blending : Three.AdditiveBlending,
			
			depthTest : false,
			transparent : true
			
		} );
		
		this.attributes = attributes;
		
		this.colors = attributes.aColor.value;
		this.sizes = attributes.aSize.value;
		
	};
	
	var F = function ( ) { };
	F.prototype = Three.ShaderMaterial;
	
	Shader.prototype = new F( );
	Shader.prototype.constructor = Shader;
	
	return Shader;
	
} );
