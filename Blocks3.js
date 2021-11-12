
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
		
		case REDPORTAL:
			if (round(redPortalFrame) == 0) {
				image(redPortal1,x*blockSize,y*blockSize);
			}
			if (round(redPortalFrame) == 1) {
				image(redPortal2,x*blockSize,y*blockSize);
			}
			if (round(redPortalFrame) == 2) {
				image(redPortal3,x*blockSize,y*blockSize);
			}
			if (round(redPortalFrame) == 3) {
				image(redPortal4,x*blockSize,y*blockSize);
			}
			if (redPortalFrame > 3) {
				redPortalFrame = 0;
			}
			
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