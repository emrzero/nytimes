var searchTerm = 'O.J. Simpson';
var numOfRecords;
var startDate;
var endDate;

var apiKey = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931';
var queryURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchTerm + '&fields=title%2C+byline%2C+news_desk%2C+date%2C+url&api-key=9d4a8986921972b65754ea0809d47c84%3A12%3A74623931'


function searchArticles(){
  $.ajax({url: queryURL, method: 'GET' }).done(function(response){
    var nyresults = response.response.docs[0];
    console.log(nyresults.headline.main);

  });
}

function resetFields(){

}


