define(['jquery'],function($){
	return{
		start:function(){
			$.get( "module/menu.html", function( data ) {
			  $( "#menu_bar" ).html( data );
			  console.log( "Menu Load was Performed." );
			});
		}
	}
});