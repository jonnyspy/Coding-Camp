
function drawPlayer() {
	fill(255,0,0);
	rect(playerX,playerY,blockSize,blockSize);
	
	playerX += playerXSpeed;
	playerY += playerYSpeed;
	playerYSpeed += 0.1
	
	if (keys[RIGHT]) {
		playerXSpeed += 0.1;
	}
	if (keys[LEFT]) {
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
			field[playerYBlock+1][playerXBlock] != CAVEWALL
		) {
			playerYSpeed = 0;
			playerY = playerYBlock*blockSize;
			isOnGround = true;
		}
		
	}
	else{
		isOnGround = false;
	}
	
	if (playerXSpeed > 0) {
		var playerXBlock = round((playerX+blockSize/2)/blockSize);
		var playerYBlock = round(playerY/blockSize);
		
		if (
			field[playerYBlock][playerXBlock] != AIR &&
			field[playerYBlock][playerXBlock] != FIRE &&
			field[playerYBlock][playerXBlock] != CAVEWALL
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
			field[playerYBlock][playerXBlock] != CAVEWALL
		) {
			playerXSpeed = 0;
			playerX = playerXBlock*blockSize+blockSize;
		}

		
	}
	
	if (dist(redPortalLocation[1],redPortalLocation[0],playerX,playerY) < 3*blockSize) {
		room += 1;
		redPortalLocation = [];

	}
	


	
	
};