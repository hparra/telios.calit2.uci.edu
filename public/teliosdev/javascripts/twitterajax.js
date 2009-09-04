
function buildTweets() {
	$.getJSON("http://teliosdev:hboxrocks@twitter.com/statuses/user_timeline/teliosdev.json?count=10&format=json&callback=?", function(data) {
		$('#tweets').html("");
		for(var i = 0; i < data.length; i = i + 1) {
			tweet = data[i].text;
			tweet_box = document.createElement('div');
			tweet_box.setAttribute('id', 'tweet_' + i);
			tweet_box.setAttribute('class', 'tweet_type_' + i % 2);
			tweet_box.innerHTML = tweet;
			$('#tweets').append(tweet_box);
		}
	});
};


/*
function updateTweets1() {
	$.getJSON("http://twitter.com/statuses/user_timeline/allenluo.json?count=10&format=json&callback=?", function(data) {
		for (var j = 0; j < data.length; j = j + 1) {
			newtweet[0] = data[i].created_at + ' ' + data[i].text;
			console.log(tweet);
			console.log(newtweet);
			if (tweet[i] !== newtweet[i]) {
				$('#tweetbox' + i).html(newtweet[i]);
			}
		}
	});
};
*/	