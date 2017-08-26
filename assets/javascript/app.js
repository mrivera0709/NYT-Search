$("#search").on("click", function() {

	var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";



	$.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {


      	console.log(response);
      	





      });




});
