var apiK = "ixNkGGhn0pHP8XSkvLam0NNRgRimeipV";
var 
//query url for the first ten results                                        search term                year of publication                                                                   first ten results        API key                           
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&facet_fields=pub_year&facet=true" + "&begin_date=" + startyeardiv + "0101&end_date=" + endyeardiv + "&page=0" + "&api-key=" + apiK;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response)
})

//