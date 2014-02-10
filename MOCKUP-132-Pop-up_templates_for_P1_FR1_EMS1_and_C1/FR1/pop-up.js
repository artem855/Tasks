	
	// CHANGES ON SCROLL
		$(window).scroll(function() {
		
			var scrollTop = $(window).scrollTop();
			if (scrollTop > 500) {
				$(".article-pop-up-right").slideDown();
			} else {
				$(".article-pop-up-right").slideUp();
			}
			
		}); // END CHANGES ON SCROLL
	
	// MINIMIZE/MAXIMIZE
	
		$(".art-pop-up-close").toggle(function () {
			$(".article-pop-up-right-content").hide();
			$(".article-pop-up-right").css("width", "30px");
			$(".art-pop-up-close").text("<")
		}, function () {
			$(".article-pop-up-right-content").show();
			$(".article-pop-up-right").css("width", "300px");
			$(".art-pop-up-close").text("X")
		});  // END MINIMIZE/MAXIMIZE

