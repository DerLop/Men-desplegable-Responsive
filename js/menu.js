$(".submenu").click(function(){
	$(this).children("ul").slideToggle();
});
$("ul").click(function(s){
	s.stopPropagation();
});