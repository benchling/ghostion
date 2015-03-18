(function ($) {
	"use strict";
	$(document).foundation();
	$(document).ready(function(){
		// $(".at_block").fitVids();
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
				},
				SRD: {
					'name': 'Somak Das',
					'bio': 'Software Engineer'
				},
				EFL: {
					'name': 'Evan Lynch',
					'bio': 'Software Engineering Intern'
				},
				MLL: {
					'name': 'Melissa Lau',
					'bio': 'Neurosciences PhD candidate at UCSD, studying the signaling systems that regulate neurogenesis.',
					'twitter': 'MelissaLau2'
				},
                JSG: {
                    'name': 'Jonathan Gootenberg',
                    'bio': 'Systems biology PhD candidate at Harvard University, developing molecular tools to understand biology.'
                }
			};
			var bio = bios[initials];
			if (bio) {
				$('.at_author_name h3').text(bio.name);
				if (bio.twitter) {
					var $twtr = $('<a>').text('@' + bio.twitter).attr('href', 'https://twitter.com/' + bio.twitter);
					var $small = $('<small>').append('(').append($twtr).append(')');
					$('.at_author_name h3').append(' ').append($small);
				}
				$('.at_author_bio').text(bio.bio);
				if (initials != 'MLL') {
					var $a = $('<a>').text('Benchling').attr('href', 'https://benchling.com/');
					$('.at_author_bio').append(' @ ').append($a);
				}
			}
		}
	});
}(jQuery));
