var searchTerm;
var numOfRecords;
var startDate;
var endDate;

var apiKey = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931';
var queryURL;
var nyresults;


function searchArticles(){
  $.ajax({url: queryURL, method: 'GET' }).done(function(response){
    nyresults = response.response.docs;
    // console.log(nyresults.headline.main);

  });
}

// function resetFields(){

// }


function retrieveValues(){
  
  searchTerm = $('#searchTerm').val();
  numOfRecords = $('#num').val();
  startDate = $('#startYear').val();
  endDate = $('#endYear').val();

  queryURL ='https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchTerm + '&api-key=9d4a8986921972b65754ea0809d47c84%3A12%3A74623931';

}

function printResults() {
  for (var i = 0; i < 5; i++){
    console.log(nyresults[i].headline.main);

    var newDiv = $('<div>');

    var h = $('<h1>');
    h.text(nyresults[i].headline.main);
    newDiv.append(h);

    var p = $('<p>');
    p.html(nyresults[i].byline.original);
    newDiv.append(p);

    p.html(nyresults[i].pub_date);
    newDiv.append(p);

    $('#resultsText').append(newDiv);
  }
}

$(document).ready(function(){

    $('#s').click(function(){
      retrieveValues();
      searchArticles();
      printResults();

      return false;
    });

    $('#c').on('click', function(){
      $('#')
      return false;
});

});

