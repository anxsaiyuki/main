define(["jquery"],function(a){return{start:function(){a.get("sideMenu.html",function(b){a("#side_menu").html(b),console.log("SideMenu Load was Performed.")})}}});