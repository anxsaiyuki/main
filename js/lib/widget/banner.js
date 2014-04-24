define(['jquery'],function($){
	return{
		start:function(){
			$.get( "banner.html", function( data ) {
			  $( "#banner" ).html( data );
			  console.log( "Banner Load was Performed." );
			});
		}
	}
});