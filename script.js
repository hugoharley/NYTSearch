var APIKey = "&api-key=ZQDAWsTqmMMqcLpxub39DKGMYzFZS4PE";
var searchTerm = "dogs";
var numberOfRecords = "";
var beginYear = "";
var endYear = "";
var beginDate = "&begin_year=" + beginYear + "0101";
var endDate = "&end_year=" + endYear + "1231";
var resultsArray = response.response.docs;


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + APIKey;

// beginDate + endDate + APIKey

// NUMBER OF RESULTS WILL BE ADJUSTED BEFORE DISPLAYING (i<numberOfRecords)
// IF BEGIN YEAR IS IS BLANK MAKE VARIABLE BLANK AND IF END YEAR IS BLANK MAKE THAT VARIABLE BLANK


$.ajax({
    url: queryURL,
    method: "GET"
})
    // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {

        console.log(response.response.docs);
    });