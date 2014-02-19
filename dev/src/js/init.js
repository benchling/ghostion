(function ($) {
    "use strict";
    $(document).foundation();
    $(document).ready(function(){
        $(".at_block").fitVids();
        $("pre code").each(function(i, e) {hljs.highlightBlock(e)});

		var $p = $(".at_post_content p").last();
		var text = $p.text();
		if (text.substring(0, 2) === '::') {
			$p.remove();
			var initials = text.substring(2);
			var bios = {
				SXW: {
					'name': 'Sajith Wickramasekara',
					'bio': 'CEO and Co-Founder'
				},
				AXS: {
					'name': 'Ashutosh Singhal',
					'bio': 'Co-Founder'
				},
				JDM: {
					'name': 'Joshua Ma',
					'bio': 'Software Engineer'
				},
				SSH: {
					'name': 'Saif Hakim',
					'bio': 'Software Engineer'
				},
				VXG: {
					'name': 'Vineet Gopal',
					'bio': 'Software Engineer'
				}
			};
			var bio = bios[initials];
			if (bio) {
				$('.at_author_name h3').text(bio.name);
				$('.at_author_bio').text(bio.bio + ' @ Benchling');
			}
		}
    });
}(jQuery));