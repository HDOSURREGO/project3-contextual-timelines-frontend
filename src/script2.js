import jQuery from "jquery";

(function(a) {
	a.fn.timeline = function() {
		var c = a(this),
			b = a(this).find(".timeline-item");
		b.eq(0).addClass("timeline-item--active");
		c.css(
			"background-image",
			"url(" +
				b
					.first()
					.find(".timeline__img")
					.attr("src") +
				")"
		);
		var g = b.length;
		a(window).scroll(function() {
			var f,
				d,
				e = a(this).scrollTop();
			b.each(function(h) {
				d = a(this).offset().top;
				f = a(this).height() + a(this).offset().top;
				a(this);
				h === g - 2 && e > d + a(this).height() / 2
					 (b.removeClass("timeline-item--active"),
					  c.css(
							"background-image",
							"url(" +
								b
									.last()
									.find(".timeline__img")
									.attr("src") +
								")"
					  ),
					  b.last().addClass("timeline-item--active"))
					: e <= f - 40 &&
					  e >= d &&
					  (c.css(
							"background-image",
							"url(" +
								a(this)
									.find(".timeline__img")
									.attr("src") +
								")"
					  ),
					  b.removeClass("timeline-item--active"),
					  a(this).addClass("timeline-item--active"));
			});
		});
	};
})(jQuery);
$("#timeline-1").timeline();
