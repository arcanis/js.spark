uniform vec3 color;
uniform sampler2D texture;

varying vec4 vColor;

void main( void ) {
	
	vec4 outColor = texture2D( texture, gl_PointCoord );
	
	if ( outColor.a < 0.5 ) discard;
	
	gl_FragColor = outColor * vec4( color * vColor.xyz, 1.0 );
	
}
