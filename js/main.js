require.config({
    baseUrl: 'js/lib',
    paths: {
        jquery: 'jquery-1.11.0.min',
		banner: 'widget/banner',
		menu: 'widget/menu',
		sideMenu: 'widget/sideMenu',
		product: 'widget/product',
		footer: 'widget/footer',
		index_banner: 'widget/index_banner'
    }
});

require(['banner','menu','sideMenu','product','footer','index_banner'], function(a,b,c,d,e,f) {
  
	a.start();
	b.start();
	c.start();
	d.start();
	e.start();
	f.start();
	
});
