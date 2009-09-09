// <div id="menu">
// 	<a class="nav" href="index.html">Home</a>
// 	<a class="nav" href="applications.html">Applications</a>
// 	<a class="nav" href="deployments.html">Deployments</a>
// 	<a class="nav" href="people.html">People</a>
// 	<a class="nav" href="join.html">Join</a>
// 	<a class="nav" href="research.html">Research</a>
// 	<a class="nav" href="acknowledgements.html">Acknowledgements</a>
// 	<a class="nav" href="help.html">Help</a>
// 	<a class="nav" href="calendar.html">Calendar</a>
// 	<a class="nav" href="http://blog.telios.calit2.uci.edu">Blog</a>
// </div>

var menu = [];

home = document.createElement('a');
home.setAttribute('class', 'nav');
home.setAttribute('href', 'home.html');
home.innerHTML = "Home";
menu.push(home);

applications = document.createElement('a');
applications.setAttribute('class', 'nav');
applications.setAttribute('href', 'applications.html');
applications.innerHTML = "Applications";
menu.push(applications);

deployments = document.createElement('a');
deployments.setAttribute('class', 'nav');
deployments.setAttribute('href', 'deployments.html');
deployments.innerHTML = "Deployments";
menu.push(deployments);
	
people = document.createElement('a');
people.setAttribute('class', 'nav');
people.setAttribute('href', 'people.html');
people.innerHTML = 'People';
menu.push(people);

join = document.createElement('a');
join.setAttribute('class', 'nav');
join.setAttribute('href', 'join.html');
join.innerHTML = "Join";
menu.push(join);

research = document.createElement('a');
research.setAttribute('class', 'nav');
research.setAttribute('href', 'research.html');
research.innerHTML = "Research";
menu.push(research);

acknowledgements = document.createElement('a');
acknowledgements.setAttribute('class', 'nav');
acknowledgements.setAttribute('href', 'acknowledgements.html');
acknowledgements.innerHTML = "Acknowledgements";
menu.push(acknowledgements);

help = document.createElement('a');
help.setAttribute('class', 'nav');
help.setAttribute('href', 'help.html');
help.innerHTML = "Help";
menu.push(help);

calendar = document.createElement('a');
calendar.setAttribute('class', 'nav');
calendar.setAttribute('href', 'calendar.html');
calendar.innerHTML = "Calendar";
menu.push(calendar);

blog = document.createElement('a');
blog.setAttribute('class', 'nav');
blog.setAttribute('href', 'http://telios.tumblr.com');
blog.innerHTML = "Blog";
menu.push(blog);

function menuAppend() {
	for (i = 0; i < menu.length; i = i + 1) {
		document.getElementById('menu').appendChild(menu[i]);
	}
}

$(document).ready(function() {	
	menuAppend();
});

