define(['jquery'],function($){
	return{
		start:function(){
			$.get( "module/footer.html", function( data ) {
			  $( "#footer" ).html( data );
			  console.log( "Footer Load was Performed." );
			});
		}
	}
});