
draw = function() {
	background(0,0,0);
	
	field = rooms[room];
	var playerFieldX = round(playerX/blockSize);
	var playerFieldY = round(playerY/blockSize);
	
	for(var i = 0; i < viewDistance; i += 1) {
		for(var j = 0; j < viewDistance; j += 1) {
			if (i < height/blockSize && j < width/blockSize) {
				drawBlock(field[(playerFieldY+i)-round(viewDistance/2)][(playerFieldX+j)-round(viewDistance/2)],(j+playerFieldX)-viewDistance/2,(i+playerFieldY)-viewDistance/2);
			}

		}
	}
	
	
	

	drawPlayer();
	
};