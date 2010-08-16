$(document).ready( function() {
	addNavigation();
	addTwitterUpdates();
	addSearch();
	setMinHeight();
	$(window).resize(setMinHeight);
});

var addNavigation = function() {
	var navigation = $('#navigation');
	navigation.detach().prependTo("#header").css({"float": "right", "margin-right": "1em", "margin-top": "2.5em"});
}

var showTweets = function (tweets) {
	var e = $('#twitter');
	for ( var i = 0; i < 3 ; i++ ) {
		e.append("<p>" + tweets[i].text + "</p>");
	}
};
var addTwitterUpdates = function() {
	if ($('#twitter').length > 0) {
		$('head').append("<script type='text/javascript' src='http://api.twitter.com/1/statuses/user_timeline.json?screen_name=dyoder&count=3&callback=showTweets'></script>");
	}
};

var addSearch = function() {
	$('div.search a').click( function() {
		window.location = "http://www.google.com/search?sourceid=chrome&ie=UTF-8&q=site:rocket.ly+"+$('div.search input').val();
	});
	$('div.search input').keypress( function(event) {
		if (event.keyCode=='13') {
			$('div.search a').click();
		}
	});
};

var setMinHeight = function() {
	$('body').css({ "min-height": window.innerHeight.toString() + "px" })
}