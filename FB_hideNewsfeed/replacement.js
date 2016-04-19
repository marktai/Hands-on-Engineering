function NewsFeedReplacement() {
		message = $('<h1>')
			.attr('id', 'distracted')
			.text("Replace with Quote")
		$('[data-location=maincolumn]').append(message);
}
