define(['jquery'],function($){
	return{
		start:function(){
			$.get( "module/sideMenu.html", function( data ) {
			  $( "#side_menu" ).html( data );
			  console.log( "SideMenu Load was Performed." );
			});
		}
	}
});