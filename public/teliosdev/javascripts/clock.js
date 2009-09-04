//Clock
setInterval('fetchTime()', 500);

var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var amorpm = 'am';

var day = currentTime.getDate();
var month = currentTime.getMonth() + 1;
var year = currentTime.getFullYear();

function fetchTime() {
	currentTime = new Date();
	hours = currentTime.getHours();
	minutes = currentTime.getMinutes();
	seconds = currentTime.getSeconds();
	
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	
	if (hours > 12) {
		hours = hours - 12;
		amorpm = 'pm';
	}
	
	//$('#clocktext').text(hours+':'+minutes+':'+seconds);
	$('#clocktext').html(hours + ':' + minutes + ' ' + amorpm);
	fetchDate();
}

function fetchDate() {
	day = currentTime.getDate();
	month = currentTime.getMonth();
	year = currentTime.getFullYear();
	var mon;
	var suffix = 'th';
	
	if (day === 1 || day === 21 || day === 31) {
		suffix = 'st';
	} else if (day === 2 || day === 22) {
		suffix = 'nd';
	} else if (day === 3 || day === 23) {
		suffix = 'rd';
	} else {
		suffix = 'th';
	}
	
	switch (month) {
		case 0: 
			mon = 'January';
			break;
		case 1: 
			mon = 'February';
			break;
		case 2: 
			mon = 'March';
			break;
		case 3: 
			mon = 'April';
			break;
		case 4: 
			mon = 'May';
			break;
		case 5: 
			mon = 'June';
			break;
		case 6: 
			mon = 'July';
			break;
		case 7: 
			mon = 'August';
			break;
		case 8: 
			mon = 'September';
			break;
		case 9: 
			mon = 'October';
			break;
		case 10: 
			mon = 'November';
			break;
		case 11: 
			mon = 'December';
			break;
	}
	
	$('#month').text(mon);
	$('#day').text(day);
}