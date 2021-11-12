
function drawBlock(type,x,y) {
	switch(type) {
		case AIR:

		break;
		
		case DIRT:

			image(dirt,x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		
		case REDPORTAL:
			if (round(redPortalFrame) == 0) {
				image(redPortal1,x*blockSize-(blockSize*3),y*blockSize-(blockSize*3),blockSize*5,blockSize*7);
			}
			if (round(redPortalFrame) == 1) {
				image(redPortal2,x*blockSize-(blockSize*3),y*blockSize-(blockSize*3),blockSize*5,blockSize*7);
			}
			if (round(redPortalFrame) == 2) {
				image(redPortal3,x*blockSize-(blockSize*3),y*blockSize-(blockSize*3),blockSize*5,blockSize*7);
			}
			if (round(redPortalFrame) == 3) {
				image(redPortal4,x*blockSize-(blockSize*3),y*blockSize-(blockSize*3),blockSize*5,blockSize*7);
			}
			if (redPortalFrame > 3.5) {
				redPortalFrame = -0.5;
			}
			
		break;
		
		case GREENPORTAL:
			if (round(greenPortalFrame) == 0) {
				image(greenPortal1,x*blockSize-(blockSize*3),y*blockSize-(blockSize*3),blockSize*5,blockSize*7);
			}
			if (round(greenPortalFrame) == 1) {
				image(greenPortal2,x*blockSize-(blockSize*3),y*blockSize-(blockSize*3),blockSize*5,blockSize*7);
			}
			if (round(greenPortalFrame) == 2) {
				image(greenPortal3,x*blockSize-(blockSize*3),y*blockSize-(blockSize*3),blockSize*5,blockSize*7);
			}
			if (round(greenPortalFrame) == 3) {
				image(greenPortal4,x*blockSize-(blockSize*3),y*blockSize-(blockSize*3),blockSize*5,blockSize*7);
			}
			if (greenPortalFrame > 3.5) {
				greenPortalFrame = -0.5;
			}
			
		break;
		
		case STONELIGHT:
			image(stoneLight,x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		
		case GRASS:
			image(grass,x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		
		case FIRE:
			if (round(fireFrame) == 1) {
				
				image(fire1,x*blockSize-(blockSize*3),y*blockSize-(blockSize*6),blockSize*5,blockSize*7)
			}
			if (round(fireFrame) == 2) {

				image(fire2,x*blockSize-(blockSize*3),y*blockSize-(blockSize*6),blockSize*5,blockSize*7);
			}
			if (fireFrame > 2) {
				fireFrame = 1;
			}
		break;
		
		case DARKCAVEWALL:
			image(caveWall1,x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		case DARKESTCAVEWALL:
			image(caveWall2,x*blockSize,y*blockSize,blockSize,blockSize);
		break;

		default:
			fill(255,255,255);
			stroke(255,0,0);
			rect(x*blockSize,y*blockSize,blockSize,blockSize);
		
	}
}