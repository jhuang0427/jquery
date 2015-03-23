  var topics=["#category","#circuit","#district","#documenttype"];
  var categoryText=["Employment Tax","Offshore","Promoter","Return Preparer","SIRF","Tax Defier"];
  var circuitText=["C01","C02","C03","C04","C05","C06","C07","C08","C09"];
  var districtText=["ALM","ALN","ALS","AK","AZ","ARE","ARW","CAC"];
  var documenttypeText=["Indictment","Pretrial","Trial","Sentencing and  Restitution","Post Trial","Appeal","Other"];
  var topicArray=[categoryText,circuitText,districtText,documenttypeText];



  	$(document).ready(function(){

  		$requrl="http://intranetdevelopment.doj.gov/tax/bank/taxonlineajax.php";
  		$.ajax({
  			type: "get",
  			url: $requrl,
  			dataType: "html",
  			async: true,
  			cache: false,
  			crossDomain: true,
  			success: function (data) {
  				$("#htmlout").html(data);

  			},
  			error: function (data) {
  				alert("error ");
  			}
  		})

		$.getJSON('http://intranetdevelopment.doj.gov/tax/bank/taxonlinetopic.php', function(data) {
			$.each(data.Category, function(val,text){
				categoryText[val]=text;
			})
			$.each(data.Circuit, function(val,text){
				circuitText[val]=text;
			})
			$.each(data.District, function(val,text){
				districtText[val]=text;
			//console.log(text);
			})
			$.each(data.DocumentType, function(val,text){
				documenttypeText[val]=text;
			})			
		});

		setTimeout(
			function(){
				$.each(topics, function(val, text) {
					//$(topics[val]).append( new Option("", -1));
					$.each(topicArray[val], function(valArray, textArray) {
						$(topics[val]).append( new Option(textArray, valArray))
						console.log(valArray+" "+textArray);
					})
      			});
			}, 500
		);
  	});

  function sort(links){

  	$requrl="http://intranetdevelopment.doj.gov/tax/bank/taxonlineajax.php";
  	$requrl += "?sortby=" + links;

  	$.ajax({
  		type: "get",
  		url: $requrl,
  		dataType: "html",
  		async: true,
  		crossDomain: true,
  		success: function (data) {
  			$("#htmlout").html(data);

  		},
  		error: function (data) {
  			alert("error ");
  		}
  	});
  }

  function go(links){

  	$requrl="http://intranetdevelopment.doj.gov/tax/bank/taxonlineajax.php";
  	$requrl += "?page=" + links;

  	$.ajax({
  		type: "get",
  		url: $requrl,
  		dataType: "html",
  		async: true,
  		crossDomain: true,
  		success: function (data) {
  			$("#htmlout").html(data);

  		},
  		error: function (data) {
  			alert("error ");
  		}
  	});
  }


  function reset(){

  	$('#filter').empty();
  	$('#topic').val("");
  	$('#filter').val("");
  	$requrl="http://intranetdevelopment.doj.gov/tax/bank/taxonlineajax.php";
  	$requrl += "?reset=1";

  	$.ajax({
  		type: "get",
  		url: $requrl,
  		dataType: "html",
  		async: true,
  		crossDomain: true,
  		success: function (data) {
  			$("#htmlout").html(data);

  		},
  		error: function (data) {
  			alert("error ");
  		}
  	});
}