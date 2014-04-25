define(['jquery'],function($){
	return{
		start:function(){
			$.get( "module/top_bar.html", function( data ) {
			  $( "#top_bar" ).html( data );
			  console.log( "Top_bar Load was Performed." );
			});
		}
	}
});