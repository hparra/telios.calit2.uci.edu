var tweet;
var tweetbox;

function buildTweets() {
	$.getJSON("http://twitter.com/status/user_timeline/teliosdev.json?count=10&callback=?", function(data){
		for(var i = 0; i < data.length; i = i + 1) {
			tweet = data[i].created_at + ' ' + data[i].text;
			console.log(tweet);
			if (i === 0 || i%2 === 0) {
				tweetbox = "<div id='tweetbox'" + i + " class='tweetbox0'>" + tweet + "</div>"
				$('#twitter').append(tweetbox);
			} else {
				tweetbox = "<div id='tweetbox'" + i + " class='tweetbox1'>" + tweet + "</div>"
				$('#twitter').append(tweetbox);
			}
		}
	});
}

