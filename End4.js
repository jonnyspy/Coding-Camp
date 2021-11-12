
draw = function() {
	background(0,0,0);
	
	field = rooms[room];
	
	for(var i = 0; i < field.length; i += 1) {
		for(var j = 0; j < field[i].length; j += 1) {
			drawBlock(field[i][j],j,i);
			if (field[i][j] == PORTAL) {
				portalLocations[portalLocations.length] = [i*blockSize,j*blockSize];
			}
		}
	}
	
	for(var i = 0; i < portalLocations.length; i += 1) {
		for(var j = 0; j < portalLocations.length; j += 1) {
			if (i == j) {
				delete poertalLocations[j];
			}
		}
	}
	

	drawPlayer();
	
};