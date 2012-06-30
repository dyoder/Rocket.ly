$(document).ready( function() {
  convertImagesToInsets();
	addTwitterUpdates();
	addSearch();
	setMinHeight();
	$(window).resize(setMinHeight);
});

var convertImagesToInsets = function() {
  $(".post img").each(function(index,image) {
    var image = $(image);
    var link = image.parent("a");
    var el;
    
    if (link.size() > 0) {
      el = link.wrap("<div class='inset'/>");
    } else {
      el = image.wrap("<div class='inset'/>")
    }
    
    el.after("<p class='caption'>"+image.attr("alt")+"</p>");
  });
};

var showTweets = function (tweets) {
	var e = $('#twitter');
	var j = tweets.length > 3 ? 3: tweets.length;
	for ( var i = 0; i < j ; i++ ) {
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