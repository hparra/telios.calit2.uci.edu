var tweet = new Array();
var newtweet = new Array();
var tweetbox;

function buildTweets() {
	alert('gah!');
	$.getJSON("http://twitter.com/statuses/user_timeline/teliosdev.json?count=10&format=json&callback=?", function(data) {
		alert('hmm');
		for(var i = 0; i < data.length; i = i + 1) {
			tweet[0] = data[i].created_at + ' ' + data[i].text;
			alert('hi');
			if (i === 0 || i%2 === 0) {
				tweetbox = "<div id='tweetbox'" + i + " class='tweetbox0'>" + tweet[0] + "</div>";
				$('#twitter').append(tweetbox);
				alert('1:build!');
			} else {
				tweetbox = "<div id='tweetbox'" + i + " class='tweetbox1'>" + tweet[0] + "</div>";
				$('#twitter').append(tweetbox);
				alert('2:build!');
			}
		}
	});
};

function updateTweets() {
	alert('updated!');
	$.getJSON("http://twitter.com/statuses/user_timeline/teliosdev.json?count=10&format=json&callback=?", function(data) {
		alert('hmm');
		for (var j = 0; j < data.length; j = j + 1) {
			newtweet[0] = data[i].created_at + ' ' + data[i].text;
			console.log(tweet[i]);
			console.log(newtweet[i]);
			if (tweet[i] !== newtweet[i]) {
				$('#tweetbox' + i).html(newtweet[i]);
			}
		}
	});
};
	