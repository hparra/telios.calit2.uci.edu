// Mouse Coordinates
var mousex = document.screenX;
var mousey = document.screenY;

//Init Timer
var timer = 10000000;
restartTimer();

function restartTimer() {
    screensaver = setTimeout('initScreenSaver()', timer); // Delay in milliseconds
}

function initScreenSaver() {
	clearTimeout(screensaver);
	i3.StateManager.changeState('screen');
    $('#screen').fadeIn('fast');
}

function killScreenSaver() {
	clearTimeout(screensaver);
    restartTimer();
    $('#screen').fadeOut();
}

$(document).mousemove(function(e) {
	if (e.pageX !== mousex) {
		mousex = e.pageX;
		killScreenSaver();
	}
	if (e.pageY !== mousey) {
		mousey = e.pageY;
		killScreenSaver();
	}
});

$(document).click(function() {
	killScreenSaver();
});