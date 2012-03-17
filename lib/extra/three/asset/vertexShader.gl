attribute float aSize;
attribute vec4 aColor;

varying vec4 vColor;

void main( void ) {
	
	vColor = aColor;
	
	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
	
	gl_PointSize = aSize * ( 150.0 / length( mvPosition.xyz ) );
	
	gl_Position = projectionMatrix * mvPosition;
	
}
