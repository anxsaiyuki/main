define(['jquery'],function($){
	return{
		start:function(){
			$.get( "module/item.php", function( data ) {
			  $( "#item_container" ).html( data );
			  console.log( "Item Load was Performed." );
			});
		}
	}
});