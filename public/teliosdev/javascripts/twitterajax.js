
$.getJSON("http://twitter.com/status/user_timeline/teliosdev.json?count=10&callback=?",
        function(data){
			console.log(data[0]);
        });