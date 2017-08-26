$("#search").on("click", function() {


	var q = "&q=" + $("#searchTerm").text();
	var num = $("#records").text();
	var begin = "&begin_date=" + $("#start").text();
	var end = "&end_date=" + $("#end").text();
	var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931" + q;



	$.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {


      	console.log(response);
      	





      });




});
