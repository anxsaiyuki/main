require.config({
    baseUrl: 'js/lib',
    paths: {
        jquery: 'jquery-1.11.0.min',
		banner: 'widget/banner',
		menu: 'widget/menu',
		sideMenu: 'widget/sideMenu',
		product: 'widget/product',
		footer: 'widget/footer',
		index_banner: 'widget/index_banner',
		top_bar: 'widget/top_bar',
		item: 'widget/item'
    }
});

require(['banner','menu','sideMenu','product','footer','index_banner','top_bar','item'], function(a,b,c,d,e,f,g,h) {
  
	a.start();
	b.start();
	c.start();
	d.start();
	e.start();
	f.start();
	g.start();
	h.start();
	
	require(['jquery'], function($) {
			$(document).ready(function() {
				$('a.login-window').click(function() {
					
							//Getting the variable's value from a link 
					var loginBox = $(this).attr('href');

					//Fade in the Popup
					$(loginBox).fadeIn(300);
					
					//Set the center alignment padding + border see css style
					var popMargTop = ($(loginBox).height() + 24) / 2; 
					var popMargLeft = ($(loginBox).width() + 24) / 2; 
					
					$(loginBox).css({ 
						'margin-top' : -popMargTop,
						'margin-left' : -popMargLeft
					});
					
					// Add the mask to body
					$('body').append('<div id="mask"></div>');
					$('#mask').fadeIn(300);
					
					return false;
				});

				// When clicking on the button close or the mask layer the popup closed
				$('a.close, #mask').on('click', function() { 
				  $('#mask , .login-popup').fadeOut(300 , function() {
					$('#mask').remove();  
				}); 
				return false;
				});
			});
	
	});
	
	
	
});
