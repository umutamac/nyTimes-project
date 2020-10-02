var apiK = "ixNkGGhn0pHP8XSkvLam0NNRgRimeipV";
var startYearInput = $("#startYear").val();
var endYearInput = $("#endYear").val();
var searchInput = $("#searchTerm").attr("value");
var numOfArticles = $("option").attr("value");

$(document).ready(function () {
    //query url for the first ten results                                        search term                year of publication                                                                   first ten results        API key                           
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchInput + "&facet_fields=pub_year&facet=true" + "&begin_date=" + startYearInput + "0101&end_date=" + endYearInput + "&page=0" + "&api-key=" + apiK;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
    })


    // var searchBtn = $("#search");

    var clearBtn = $("#clear");
    console.log(clearBtn);
    clearBtn.click(function () {
        searchInput = "";
        startYearInput = "";
        endYearInput = "";
        console.log(searchInput);
        console.log(startYearInput);
        console.log(endYearInput);

    })
    //

    for (i = 0; i < numOfArticles; i++) {
        $(".results").append($("<div>").addClass("articleContent"));
        $(".articleContent").text(response.Article); // <-- will need to be rechecked    
    }
});
