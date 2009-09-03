var tweet = new Array();
var newtweet = new Array();
var tweetbox;

function buildTweets() {
	$.getJSON("http://twitter.com/status/user_timeline/teliosdev.json?count=10&callback=?", function(data) {
		for(var i = 0; i < data.length; i = i + 1) {
			tweet[0] = data[i].created_at + ' ' + data[i].text;
			console.log(tweet[0]);
			if (i === 0 || i%2 === 0) {
				tweetbox = "<div id='tweetbox'" + i + " class='tweetbox0'>" + tweet[0] + "</div>";
				$('#twitter').append(tweetbox);
			} else {
				tweetbox = "<div id='tweetbox'" + i + " class='tweetbox1'>" + tweet[0] + "</div>";
				$('#twitter').append(tweetbox);
			}
		}
	});
};

function updateTweets() {
	$.getJSON("http://twitter.com/status/user_timeline/teliosdev.json?count=10&callback=?", function(data) {
		for (var i = 0; i < data.length; i = i + 1) {
			newtweet[0] = data[i].created_at + ' ' + data[i].text;
			if (tweet[i] !== newtweet[i]) {
				$('#tweetbox' + i).html(newtweet[i]);
			}
		}
	});
};
	