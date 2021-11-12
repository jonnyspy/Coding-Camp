
function drawBlock(type,x,y) {
	switch(type) {
		case AIR:
			noStroke();
			fill(100,150,255);
			rect(x*blockSize,y*blockSize,blockSize,blockSize);
		break;
		
		case 1:
			noStroke();
			fill(100,100,100);
			rect(x*blockSize,y*blockSize,blockSize,blockSize);
		break;
	}
}