function psound(filename) {
	var music = document.getElementById(filename);
	
	if( music.paused) {
		music.play();
	}
	else {
		music.pause();
	}
}