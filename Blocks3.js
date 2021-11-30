
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
		
		case BLUEPORTAL:
			if (round(blueFrame) == 0) {
				image(blue12,x*blockSize-(blockSize*3),y*blockSize-(blockSize*3),blockSize*5,blockSize*7);
			}
			if (round(blueFrame) == 1) {
				image(blue2,x*blockSize-(blockSize*3),y*blockSize-(blockSize*3),blockSize*5,blockSize*7);
			}
			if (round(blueFrame) == 2) {
				image(blue3,x*blockSize-(blockSize*3),y*blockSize-(blockSize*3),blockSize*5,blockSize*7);
			}
			if (round(blueFrame) == 3) {
				image(blue4,x*blockSize-(blockSize*3),y*blockSize-(blockSize*3),blockSize*5,blockSize*7);
			}
			if (round(blueFrame) == 4) {
				image(blue5,x*blockSize-(blockSize*3),y*blockSize-(blockSize*3),blockSize*5,blockSize*7);
			}
			if (round(blueFrame) == 5) {
				image(blue6,x*blockSize-(blockSize*3),y*blockSize-(blockSize*3),blockSize*5,blockSize*7);
			}
			if (round(blueFrame) == 6) {
				image(blue7,x*blockSize-(blockSize*3),y*blockSize-(blockSize*3),blockSize*5,blockSize*7);
			}
			if (round(blueFrame) == 7) {
				image(blue8,x*blockSize-(blockSize*3),y*blockSize-(blockSize*3),blockSize*5,blockSize*7);
			}
			if (round(blueFrame) == 8) {
				image(blue9,x*blockSize-(blockSize*3),y*blockSize-(blockSize*3),blockSize*5,blockSize*7);
			}
			if (round(blueFrame) == 9) {
				image(blue11,x*blockSize-(blockSize*3),y*blockSize-(blockSize*3),blockSize*5,blockSize*7);
			}
			if (round(blueFrame) == 10) {
				image(blue1,x*blockSize-(blockSize*3),y*blockSize-(blockSize*3),blockSize*5,blockSize*7);
			}

			if (blueFrame > 10.4) {
				blueFrame = -0.5;
			}
			
		break;
		
		case STONELIGHT:
			image(stoneLight,x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		
		case GRASS:
			image(grass,x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		
		case LEAF:
			image(leaf,x*blockSize,y*blockSize,blockSize,blockSize);
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
		case WATER:
			if (round(waterFrame) == 0) {
				
				image(water1,x*blockSize,y*blockSize,blockSize,blockSize)
			}
			if (round(waterFrame) == 1) {

				image(water2,x*blockSize,y*blockSize,blockSize,blockSize);
			}
			if (waterFrame > 1) {
				waterFrame = 0;
			}
		break;
		
		case STALAGMITE:
			image(stalagtite,x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		
		case CACTUS:
			image(cactus,x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		
		case CAVEWALL:
			image(cavewall,x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		
		case SAND:
			image(sand,x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		case WOOD:
			image(wood,x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		case TREEWALL:
			image(woodWall,x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		case LAVA:
			image(lava,x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		case SANDSTONE:
			image(sandstone,x*blockSize,y*blockSize,blockSize,blockSize);
			
		break;
		
		case RUINEDPILLAR:
			image(ruinPillar,x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		case CAVEFLOOR:
			image(caveFloor,x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		case BLOODLAKE:
			if (round(bloodFrame) == 0) {
				
				image(bloodLake,x*blockSize,y*blockSize,blockSize,blockSize)
			}
			if (round(bloodFrame) == 1) {

				image(bloodLake2,x*blockSize,y*blockSize,blockSize,blockSize);
			}
			if (round(bloodFrame) == 2) {

				image(bloodLake3,x*blockSize,y*blockSize,blockSize,blockSize);
			}
			if (round(bloodFrame) == 3) {

				image(bloodLake4,x*blockSize,y*blockSize,blockSize,blockSize);
			}
			if (bloodFrame > 3) {
				bloodFrame = 0;
			}
		
		break;
		case BLOODTREEWOOD:
			image(bloodTreeWood,x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		case ASHANDSAND:
			image(ash,x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		case CLOUDS:
			image(cloud,x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		case BLOODTREELEAF:
			image(bloodLeaf,x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		default:
			fill(255,255,255);
			stroke(255,0,0);
			rect(x*blockSize,y*blockSize,blockSize,blockSize);
		
	}
}

function Mob1(i) {
	if (mob1[i] != []) {
		playerFieldX = round(playerX/blockSize);
		playerFieldY = round(playerY/blockSize);
		
		image(dragon,mob1[i][0]-3*blockSize,mob1[i][1]-3*blockSize,blockSize*6,blockSize*6);
		
		
		if (mob1[i][2] < 0) {
			mob1[i] = [];
		}
			
		if (mob1[i][0] < playerX) {
			mob1[i][0] += mob1Speed;
		}
		if (mob1[i][0] > playerX) {
			mob1[i][0] -= mob1Speed;
		}
		if (mob1[i][1] < playerY) {
			mob1[i][1] += mob1Speed;
		}
		if (mob1[i][1] > playerY) {
			mob1[i][1] -= mob1Speed;
		}
		
		
		var mobXBlock = round(mob1[i][0]/blockSize);
		var mobYBlock = round(mob1[i][1]/blockSize);

		
	}
	
}


function Mob2() {
	for(var i = 0; i < mob2.length; i += 1) {
		
	}
}
