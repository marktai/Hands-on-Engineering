
function NewsFeedReplacement(location) {
		message = $('<h1>')
			.attr('id', 'distracted')
			.text("Replace with Quote")
		location.append(message);
}

function blockAndDisplay() {
    var feed = $('[id^=topnews_main_stream], [id^=mostrecent_main_stream], [id^=pagelet_home_stream]');
    var message = $('#distracted');
    console.log(message);
    feed.children().remove();
    $('#pagelet_games_rhc').remove();
    
    if (feed.length == 0) {
        message.remove();
    } else if (message.length == 0) {
        NewsFeedReplacement(feed);
     }


    // $('.ticker_stream').remove();
    // $('.ego_column').remove();
    // $('#pagelet_trending_tags_and_topics').remove();
    // $('#pagelet_canvas_nav_content').remove();
}
blockAndDisplay();
//window.setInterval(blockAndDisplay, 100);
