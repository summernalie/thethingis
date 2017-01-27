$(document).ready(function() {
			$('#bill1').novacancy({
				'reblinkProbability': 0.1,
                'blink': 1,
				'blinkMin': 0.5,
				'blinkMax': 0.6,
				'loopMin': 8,
				'loopMax': 10,
				'color': '#d60404',
				'glow': ['0 0 80px #d60404', '0 0 30px #000000', '0 0 6px #d60404']
			}); 

			$('#bill2').novacancy({
				'off': 2,
				'color': '#ffffff',
				'glow': ['0 0 80px #ffffff', '0 0 30px #008000', '0 0 6px #0000ff']
			});
		});
        
        $(function() {
				$('#va-accordion').vaccordion();
			});