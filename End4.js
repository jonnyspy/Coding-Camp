
draw = function() {
	background(0,120,255);
	
	
	redPortalFrame += 0.02;
	greenPortalFrame += 0.02;
	fireFrame += 0.02;
	
	field = rooms[room];
	var playerFieldX = round(playerX/blockSize);
	var playerFieldY = round(playerY/blockSize);
	
	for(var i = 0; i < field.length; i += 1) {
		for(var j = 0; j < field[i].length; j += 1) {
			if (dist(playerFieldX,0,j,0) < viewDistance && dist(playerFieldY,0,i,0) < viewDistance) {
				drawBlock(field[i][j],j,i);
				
			}
			if (field[i][j] == REDPORTAL ||
				field[i][j] == GREENPORTAL
				
			) {
				portalLocations[portalLocations.length] = [j*blockSize, i*blockSize];
			}
		}
	}

	if (toPortal) {
		playerX = portalLocations[0][0]-blockSize/2;
		playerY = portalLocations[0][1]+blockSize*3;
		toPortal = false;
		for(var i = 0; i < portalLocations.length; i += 1) {
			if (dist(portalLocations[i][1],portalLocations[i][0],playerX,playerY) < 3*blockSize) {
				room += 1;
				
				toPortal = true;
			}
		}
	}
	
	if(start) {
		redPortal1 = loadImage("Sprites/Portal 1.png");
		redPortal2 = loadImage("Sprites/Portal 2.png");
		redPortal3 = loadImage("Sprites/Portal 3.png");
		redPortal4 = loadImage("Sprites/Portal 4.png");
		greenPortal1 = loadImage("Sprites/Green 1.png");
		greenPortal2 = loadImage("Sprites/Green 2.png");
		greenPortal3 = loadImage("Sprites/Green 3.png");
		greenPortal4 = loadImage("Sprites/Green 4.png");
		fire1 = loadImage("Sprites/Fire 1.png");
		fire2 = loadImage("Sprites/Fire 2.png");
		
	}
	start = false;

	drawPlayer();
	
	
	
};