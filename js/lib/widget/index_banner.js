define(['jquery'],function($){
	return{
		start:function(){
			$.get( "module/index_banner.html", function( data ) {
			  $( "#index_banner" ).html( data );
			  console.log( "SideMenu Load was Performed." );
			});
		}
	}
});