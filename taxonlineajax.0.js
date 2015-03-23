var topics=["Category","Circuit","District","Document Type"];
var categoryText=["Employment Tax","Offshore","Promoter","Return Preparer","SIRF","Tax Defier"];
var circuitText=["C01","C02","C03","C04","C05","C06","C07","C08","C09","C10","C11"];
var districtText=["ALM","ALN","ALS","AK","AZ","ARE","ARW","CAC"];
var documenttypeText=["Indictment","Pretrial","Trial","Sentencing and  Restitution","Post Trial","Appeal","Other"];
var topicArray=[categoryText,circuitText,districtText,documenttypeText];

    

    
	$(document).ready(function(){
	
		$('#topic').append( new Option("", -1));
		$.each(topics, function(val, text) {
    			$('#topic').append( new Option(text, val))
    		});
    		
    		$('#topic').change( function(){
		    	$('#filter').empty();
		    	if($('#topic').val()>-1){
				$.each(topicArray[$('#topic').val()], function(val, text) {
					    $('#filter').append( new Option(text, val))
				})
		    	}
    		});
    		
		$('#filter').change( function(){
			$requrl="http://intranetdevelopment.doj.gov/tax/bank/taxonlineajax.php";
			$requrl += "?topic=" + $('#topic').val() + "&filter=" + $('#filter').val();
			//console.log($requrl);
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
	    	});
    
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
		
		$.getJSON('http://intranetdevelopment.doj.gov/tax/bank/taxonlinetopic.php', function(jd) {
			//console.log(jd);
			$.each(jd.Category, function(val,text){
				categoryText[val]=text;
			})	 	
			$.each(jd.Circuit, function(val,text){
				circuitText[val]=text;
			})
			$.each(jd.District, function(val,text){
				districtText[val]=text;
			})
			$.each(jd.DocumentType, function(val,text){
				documenttypeText[val]=text;
			})
		});
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