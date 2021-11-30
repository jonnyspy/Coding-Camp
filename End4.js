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
	bloodFrame += 0.01;
	
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
				
				portalDrawLoc = [i, j];
				portalLocations[portalLocations.length] = [j*blockSize, i*blockSize];
				
			}

			
			
		}
	}
	
	
	drawBlock(field[portalDrawLoc[0]][portalDrawLoc[1]],portalDrawLoc[1],portalDrawLoc[0]);

	
	
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
		
		blue1 = loadImage("Sprites/Blue 0.png");
		blue2 = loadImage("Sprites/Blue 1.png");
		blue3 = loadImage("Sprites/Blue 2.png");
		blue4 = loadImage("Sprites/Blue 3.png");
		blue5 = loadImage("Sprites/Blue 4.png");
		blue6 = loadImage("Sprites/Blue 5.png");
		blue7 = loadImage("Sprites/Blue 6.png");
		blue8 = loadImage("Sprites/Blue 7.png");
		blue9 = loadImage("Sprites/Blue 8.png");
		blue10 = loadImage("Sprites/Blue 9.png");
		blue11 = loadImage("Sprites/Blue 11.png");
		blue12 = loadImage("Sprites/Blue 12.png");
		
		bloodLake = loadImage("Sprites/blood lake.png");
		bloodLake2 = loadImage("Sprites/blood lake 2.png");
		bloodLake3 = loadImage("Sprites/blood lake 3.png");
		bloodLake4 = loadImage("Sprites/blood lake 4.png");
		
		dragon = loadImage("Sprites/dragon.png");
		start = false;
		
	}
	toPortal = false;
	
	drawPlayer();
	
	if (toPortal) {
		
		if(cooldown <= 0) {
			room += 1;
			mob1 = [];
			mob2 = [];
			mobsPerRoom = numberOfMobs;
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

	
	//Mobs
	if (mobsPerRoom > 0) {
		var xPos = round(random(0,field.length-1));
		var yPos = round(random(0,field[0].length-1));
		
		if ((field[xPos][yPos] == AIR || 
			field[xPos][yPos] == CAVEWALL ||
			field[xPos][yPos] == DARKCAVEWALL ||
			field[xPos][yPos] == TREEWALL ||
			field[xPos][yPos] == RUINEDPILLAR) &&
			field[xPos][yPos] != null
		) {
			mob1[mob1.length] = [yPos*blockSize,xPos*blockSize,10];
			mobsPerRoom -= 1;
		}
		
	}
	
	for(var i = 0; i < mob1.length; i += 1) {
		Mob1(i);
	}
	
	//blackness
	noFill();
	stroke(0,0,0);
	strokeWeight(1100);
	ellipse(playerX,playerY,1500,1500);
	
	
	//player healthbar
	fill(255,0,0);
	noStroke();
	strokeWeight(1);
	rect(10,10,health,20);
	
	
};