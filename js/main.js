require.config({
    baseUrl: 'js/lib',
    paths: {
        jquery: 'jquery-1.11.0.min',
		banner: 'widget/banner',
		menu: 'widget/menu',
		sideMenu: 'widget/sideMenu',
		product: 'widget/product',
		footer: 'widget/footer'
    }
});

require(['banner','menu','sideMenu','product','footer'], function(a,b,c,d,e) {
  
	a.start();
	b.start();
	c.start();
	d.start();
	e.start();
	
});
