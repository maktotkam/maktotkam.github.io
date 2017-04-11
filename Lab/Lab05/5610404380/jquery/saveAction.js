// ActionScript Document
$(document).ready(function () {
	var currentDate = new Date();
	var currentYear = currentDate.getFullYear()

$("#submit").click(function(){

	alert("Hello  " + $("#firstnamein").val());

	$("#cancel").hide();
	$("#submit").hide();
	var gender = $("#gender option:selected").text()
	var getyear = $("#year").val();
	var year = currentYear - getyear

	if(year < 13){
		$('link[href="css/defaultcss.css"]').attr('href','css/kidcss.css');

	}
	else if(gender == "female"){
		$('link[href="css/defaultcss.css"]').attr('href','css/fecss.css');
	}
	else if(gender == "male"){
		$('link[href="css/defaultcss.css"]').attr('href','css/malecss.css');
	}

	var urlmot = "province/motto/"+$("#province").val()+".txt"
	var urlpic = "province/sign/"+$("#province").val()+".png"
	$.get(urlmot, function(data, status){
            $("p").html(data);
			$("h1").html(('<img src="'+urlpic+'" ></img>'));
	});


});
});
