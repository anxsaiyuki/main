define(['jquery'],function($){
	return{
		start:function(){
			$.get( "message.html", function( data ) {
			  $( "#banner" ).html( data );
			  console.log( "Load was performed." );
			});
		
		}

	}
	

});