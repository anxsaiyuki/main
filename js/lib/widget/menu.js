define(['jquery'],function($){
	return{
		start:function(){
			$.get( "menu.html", function( data ) {
			  $( "#menu_bar" ).html( data );
			  console.log( "Menu Load was Performed." );
			});
		}
	}
});