
function drawPlayer() {
	fill(255,0,0);
	image(playerFrame,playerX+1,playerY-blockSize,blockSize*2,blockSize*2);
	
	playerX += playerXSpeed;
	playerY += playerYSpeed;
	playerYSpeed += gravity;
	
	var playerXBlockM = round(playerX/blockSize);
	var playerYBlockM = round(playerY/blockSize);
	var mouseXBlock = round(mouseX/blockSize);
	var mouseYBlock = round(mouseY/blockSize);
	
	//temp
	if (mousePressed) {
		if (mouseButton == RIGHT) {
			field[mouseYBlock][mouseXBlock] = AIR;
			field[mouseYBlock-1][mouseXBlock] = AIR;
			field[mouseYBlock+1][mouseXBlock] = AIR;
			field[mouseYBlock][mouseXBlock-1] = AIR;
			field[mouseYBlock][mouseXBlock+1] = AIR;
			field[mouseYBlock-1][mouseXBlock-1] = AIR;
			field[mouseYBlock+1][mouseXBlock+1] = AIR;
			field[mouseYBlock-1][mouseXBlock+1] = AIR;
			field[mouseYBlock+1][mouseXBlock-1] = AIR;
		}
		if (mouseButton == LEFT) {
			field[mouseYBlock][mouseXBlock] = DIRT;
			field[mouseYBlock-1][mouseXBlock] = DIRT;
			field[mouseYBlock+1][mouseXBlock] = DIRT;
			field[mouseYBlock][mouseXBlock-1] = DIRT;
			field[mouseYBlock][mouseXBlock+1] = DIRT;
			field[mouseYBlock-1][mouseXBlock-1] = DIRT;
			field[mouseYBlock+1][mouseXBlock+1] = DIRT;
			field[mouseYBlock-1][mouseXBlock+1] = DIRT;
			field[mouseYBlock+1][mouseXBlock-1] = DIRT;
		}
	}
	
	if(field[playerYBlockM][playerXBlockM] == LAVA) {
		health -= 1;
	}
	if(health < 0) {
		
		
		playerX = 500;
		playerY = 200;
		room = 0;
		health = 100;
		
	}
	
	if(field[playerYBlockM][playerXBlockM] == FIRE) {
		playerYSpeed -= 8;
		if(health < 100) {
			health += 10;
		}
	}
	if(field[playerYBlockM][playerXBlockM] == WATER || field[playerYBlockM][playerXBlockM] == BLOODLAKE) {
		if (playerYSpeed > 1) {
			playerYSpeed = 1;
		}
		if (playerYSpeed < -2) {
			playerYSpeed = -2;
		}
		if (playerXSpeed > 1) {
			playerXSpeed = 1;
		}
		if (playerXSpeed < -1) {
			playerXSpeed = -1;
		}
	}

	if (keys[RIGHT] && playerXSpeed < 2) {
		playerXSpeed += 0.1;
	}
	if (keys[LEFT] && playerXSpeed > -2) {
		playerXSpeed -= 0.1;
	}
	if (keys[UP] && isOnGround) {
		playerYSpeed -= 4;
	}
	if (playerY < blockSize) {
		playerY = blockSize;
	}
	
	
	if (playerYSpeed > 0) {
		var playerXBlock = round(playerX/blockSize);
		var playerYBlock = round(playerY/blockSize);
		
		if (
			field[playerYBlock+1][playerXBlock] != AIR &&
			field[playerYBlock+1][playerXBlock] != FIRE &&
			field[playerYBlock+1][playerXBlock] != CAVEWALL &&
			field[playerYBlock+1][playerXBlock] != DARKCAVEWALL &&
			field[playerYBlock+1][playerXBlock] != WATER &&
			field[playerYBlock+1][playerXBlock] != TREEWALL &&
			field[playerYBlock+1][playerXBlock] != LAVA &&
			field[playerYBlock+1][playerXBlock] != LEAF &&
			field[playerYBlock+1][playerXBlock] != RUINEDPILLAR &&
			field[playerYBlock+1][playerXBlock] != BLOODLAKE &&
			field[playerYBlock+1][playerXBlock] != BLOODTREEWOOD &&
			field[playerYBlock+1][playerXBlock] != CLOUDS
		) {
			playerYSpeed = 0;
			playerY = playerYBlock*blockSize;
			isOnGround = true;
		}
		
	}
	else{
		isOnGround = false;
	}
	
	if (playerYSpeed < 0) {
		var playerXBlock = round(playerX/blockSize);
		var playerYBlock = round(playerY/blockSize);
		
		if (
			field[playerYBlock-1][playerXBlock] != AIR &&
			field[playerYBlock-1][playerXBlock] != FIRE &&
			field[playerYBlock-1][playerXBlock] != CAVEWALL &&
			field[playerYBlock-1][playerXBlock] != DARKCAVEWALL &&
			field[playerYBlock-1][playerXBlock] != WATER &&
			field[playerYBlock-1][playerXBlock] != TREEWALL &&
			field[playerYBlock-1][playerXBlock] != LAVA &&
			field[playerYBlock-1][playerXBlock] != LEAF &&
			field[playerYBlock-1][playerXBlock] != RUINEDPILLAR &&
			field[playerYBlock-1][playerXBlock] != BLOODLAKE &&
			field[playerYBlock-1][playerXBlock] != BLOODTREEWOOD &&
			field[playerYBlock-1][playerXBlock] != CLOUDS
		) {
			playerYSpeed = 0.1;


		}
		
	}
	
	if (playerXSpeed > 0) {
		var playerXBlock = round((playerX+blockSize/2)/blockSize);
		var playerYBlock = round(playerY/blockSize);
		
		if (
			field[playerYBlock][playerXBlock] != AIR &&
			field[playerYBlock][playerXBlock] != FIRE &&
			field[playerYBlock][playerXBlock] != CAVEWALL &&
			field[playerYBlock][playerXBlock] != DARKCAVEWALL &&
			field[playerYBlock][playerXBlock] != WATER &&
			field[playerYBlock][playerXBlock] != TREEWALL &&
			field[playerYBlock][playerXBlock] != LAVA &&
			field[playerYBlock][playerXBlock] != LEAF &&
			field[playerYBlock][playerXBlock] != RUINEDPILLAR &&
			field[playerYBlock][playerXBlock] != BLOODLAKE &&
			field[playerYBlock][playerXBlock] != BLOODTREEWOOD &&
			field[playerYBlock][playerXBlock] != CLOUDS
		) {
			playerXSpeed = 0;
			playerX = playerXBlock*blockSize-blockSize;
		}
		
	}
	
	if (playerXSpeed < 0) {
		var playerXBlock = round((playerX-blockSize/2)/blockSize);
		var playerYBlock = round(playerY/blockSize);
		
		if (
			field[playerYBlock][playerXBlock] != AIR &&
			field[playerYBlock][playerXBlock] != FIRE &&
			field[playerYBlock][playerXBlock] != CAVEWALL &&
			field[playerYBlock][playerXBlock] != DARKCAVEWALL &&
			field[playerYBlock][playerXBlock] != WATER &&
			field[playerYBlock][playerXBlock] != TREEWALL &&
			field[playerYBlock][playerXBlock] != LAVA &&
			field[playerYBlock][playerXBlock] != LEAF &&
			field[playerYBlock][playerXBlock] != RUINEDPILLAR &&
			field[playerYBlock][playerXBlock] != BLOODLAKE &&
			field[playerYBlock][playerXBlock] != BLOODTREEWOOD &&
			field[playerYBlock][playerXBlock] != CLOUDS
		) {
			playerXSpeed = 0;
			playerX = playerXBlock*blockSize+blockSize;
		}

		
	}

	for(var i = 0; i < portalLocations.length; i += 1) {


		if (dist(portalLocations[i][0],portalLocations[i][1],playerX,playerY) < 3*blockSize) {
			toPortal = true;
		}

	}
	
	
	
	


	
	
};