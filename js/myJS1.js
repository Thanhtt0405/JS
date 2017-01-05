$(document).ready(function(){
	$("#fname").keydown(function(){
		$("p").text($("#fname").val());
	})
})