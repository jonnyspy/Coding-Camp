
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
	
	
	if (playerYSpeed > 0) {
		var playerXBlock = round(playerX/blockSize);
		var playerYBlock = round(playerY/blockSize);
		
		if (field[playerYBlock+1][playerXBlock] != AIR) {
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
		
		if (field[playerYBlock][playerXBlock] != AIR) {
			playerXSpeed = 0;
			playerX = playerXBlock*blockSize-blockSize;
		}
		
	}
	
	if (playerXSpeed < 0) {
		var playerXBlock = round((playerX-blockSize/2)/blockSize);
		var playerYBlock = round(playerY/blockSize);
		
		if (field[playerYBlock][playerXBlock] != AIR) {
			playerXSpeed = 0;
			playerX = playerXBlock*blockSize+blockSize;
		}
		
	}

	
	
};