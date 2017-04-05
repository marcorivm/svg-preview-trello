(function() {
	var loadPreviews = function() {
		jQuery('.window .attachment-thumbnail > a[href*=".svg"]')
			.each(function(key, value) {
				jQuery(value)
					.css("background-image", "url('" + jQuery(value)
						.attr('href') + "')")
					.css('background-size', "contain");
				jQuery(value)
					.find('span')
					.remove()
			});
	};
	jQuery(document)
		.ready(function() {
			loadPreviews();
		});
	setInterval(function() {
		loadPreviews();
	}, 1000);
})();