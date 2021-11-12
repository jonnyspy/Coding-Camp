
function drawBlock(type,x,y) {
	switch(type) {
		case AIR:
			noStroke();
			fill(100,150,255);
			rect(x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		
		case DIRT:

			image(dirt,x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		
		case LIMEPORTAL:
			
		break;
		
		case STONELIGHT:
			image(stoneLight,x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		
		case GRASS:
			image(grass,x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		

		default:
			fill(255,255,255);
			stroke(255,0,0);
			rect(x*blockSize,y*blockSize,blockSize,blockSize);
		
	}
}