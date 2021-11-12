
draw = function() {
	background(0,0,0);
	redPortalFrame += 0.02;
	
	field = rooms[room];
	var playerFieldX = round(playerX/blockSize);
	var playerFieldY = round(playerY/blockSize);
	
	for(var i = 0; i < field.length; i += 1) {
		for(var j = 0; j < field[i].length; j += 1) {
			if (dist(playerFieldX,0,j,0) < viewDistance && dist(playerFieldY,0,i,0) < viewDistance) {
				drawBlock(field[i][j],j,i);
			}
		}
	}

	drawPlayer();
};