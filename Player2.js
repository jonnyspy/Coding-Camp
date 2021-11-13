
function drawPlayer() {
	fill(255,0,0);
	rect(playerX,playerY,blockSize,blockSize);
	
	playerX += playerXSpeed;
	playerY += playerYSpeed;
	playerYSpeed += gravity;
	
	var playerXBlockM = round(playerX/blockSize);
	var playerYBlockM = round(playerY/blockSize);
	
	if(field[playerYBlockM][playerXBlockM] == WATER) {
		if (playerYSpeed > 0) {
			playerYSpeed -= gravity/2;
		}
	}

	if (keys[RIGHT] && playerXSpeed < 2) {
		playerXSpeed += 0.1;
	}
	if (keys[LEFT] && playerXSpeed > -2) {
		playerXSpeed -= 0.1;
	}
	if (keys[UP] && isOnGround) {
		playerYSpeed -= 3;
	}
	if (playerY < 0) {
		playerY = 0;
	}
	
	
	if (playerYSpeed > 0) {
		var playerXBlock = round(playerX/blockSize);
		var playerYBlock = round(playerY/blockSize);
		
		if (
			field[playerYBlock+1][playerXBlock] != AIR &&
			field[playerYBlock+1][playerXBlock] != FIRE &&
			field[playerYBlock+1][playerXBlock] != CAVEWALL &&
			field[playerYBlock+1][playerXBlock] != DARKCAVEWALL &&
			field[playerYBlock+1][playerXBlock] != WATER
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
			field[playerYBlock-1][playerXBlock] != WATER
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
			field[playerYBlock][playerXBlock] != WATER
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
			field[playerYBlock][playerXBlock] != WATER
		) {
			playerXSpeed = 0;
			playerX = playerXBlock*blockSize+blockSize;
		}

		
	}
	// var tempPos = 0;
	// fill(0, 0, 0);
	// text("" + playerX + "," + playerY, 700, 100 - 12);
	for(var i = 0; i < portalLocations.length; i += 1) {
		// if (dist(portalLocations[i][1],portalLocations[i][0],playerX,playerY) < 200) {
		//	text("" + portalLocations[i][0] + "," + portalLocations[i][1] + " d" + 
		//	round(dist(portalLocations[i][0],portalLocations[i][1],playerX,playerY)), 700, 100 + tempPos * 12);
		//	tempPos++;
		//}
		
		if (dist(portalLocations[i][0],portalLocations[i][1],playerX,playerY) < 3*blockSize) {
			toPortal = true;
		}
	}
	
	
	


	
	
};