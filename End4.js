var music = new Audio("https://cdn.discordapp.com/attachments/906018721733160992/908893659552948284/viking_blues_-_111221_6.36_PM.m4a");
draw = function() {
	background(0,120,255);
	
	fill(0,0,0);
	text(room,0,12);
	
	music.play();
	
	redPortalFrame += 0.02;
	greenPortalFrame += 0.02;
	fireFrame += 0.02;
	waterFrame += 0.01;
	blueFrame += 0.2;
	
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
				field[i][j] == GREENPORTAL ||
				field[i][j] == BLUEPORTAL 
				
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
		
		blue1 = loadImage("Sprites/Blue 1.png");
		blue2 = loadImage("Sprites/Blue 2.png");
		blue3 = loadImage("Sprites/Blue 3.png");
		blue4 = loadImage("Sprites/Blue 4.png");
		blue5 = loadImage("Sprites/Blue 5.png");
		blue6 = loadImage("Sprites/Blue 6.png");
		blue7 = loadImage("Sprites/Blue 7.png");
		blue8 = loadImage("Sprites/Blue 8.png");
		blue9 = loadImage("Sprites/Blue 9.png");
		blue10 = loadImage("Sprites/Blue 11.png");
		blue11 = loadImage("Sprites/Blue 12.png");
		blue12 = loadImage("Sprites/Blue 12.png");
		
	}
	start = false;
	toPortal = false;
	drawPlayer();
	
	if (toPortal) {
		
		
		if(cooldown <= 0) {
			room += 1;
			if (room >= rooms.length) {
				room = 0;
			}
			field = rooms[room];
			
			playerYSpeed = 0;
			cooldown = 3;
			
		
			for(var i = 0; i < field.length; i += 1) {
				for(var j = 0; j < field[i].length; j += 1) {

					if (field[i][j] == REDPORTAL ||
						field[i][j] == GREENPORTAL ||
						field[i][j] == BLUEPORTAL 
						
					) {
						
						playerX = j*blockSize-blockSize/2;
						playerY = i*blockSize+blockSize*3;

						toPortal = false;
					}
					
				}
			}
		}
		
	}
	cooldown -= 0.01;
	
	
	
	
	
};