var music = new Audio("https://cdn.discordapp.com/attachments/906018721733160992/908893659552948284/viking_blues_-_111221_6.36_PM.m4a");
draw = function() {
	background(0,120,255);
	music.play();
	
	redPortalFrame += 0.02;
	greenPortalFrame += 0.02;
	fireFrame += 0.02;
	waterFrame += 0.01;
	
	field = rooms[room];
	var playerFieldX = round(playerX/blockSize);
	var playerFieldY = round(playerY/blockSize);
	portalLocations = [];
	
	for(var i = 0; i < field.length; i += 1) {
		for(var j = 0; j < field[i].length; j += 1) {
			if (dist(playerFieldX,playerFieldY,j,i) < viewDistance) {
				drawBlock(field[i][j],j,i);
				
			}
			if (field[i][j] == REDPORTAL ||
				field[i][j] == GREENPORTAL
				
			) {
				
				portalLocations[portalLocations.length] = [j*blockSize, i*blockSize];
				
			}
		}
	}
	
	// fill(255, 0, 0);
	// var tempPos = 0;
	// for (var i = 0; i < portalLocations.length; i++)
	// {
	//	if (dist(playerFieldX,0,portalLocations[i][1]/blockSize,0) < viewDistance && dist(playerFieldY,0,portalLocations[i][0]/blockSize,0) < viewDistance) {
	//			text("" + portalLocations[i][0] + "," + portalLocations[i][1], 400, 112 + tempPos * 12);
	//			tempPos++;
	//		}
	//	
	// }

	if (toPortal) {
		
		room += 1;
		
		field = rooms[room];
	
		for(var i = 0; i < field.length; i += 1) {
			for(var j = 0; j < field[i].length; j += 1) {

				if (field[i][j] == REDPORTAL ||
					field[i][j] == GREENPORTAL
					
				) {
					
					playerX = j*blockSize-blockSize/2;
					playerY = i*blockSize+blockSize*3;

					toPortal = false;
				}
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
		water1 = loadImage("Sprites/0.png");
		water2 = loadImage("Sprites/1.png");
		
	}
	start = false;

	drawPlayer();
	
	
	
};