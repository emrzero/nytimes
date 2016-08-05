var searchTerm;
var numOfRecords;
var startDate;
var endDate;

var apiKey = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931';
var queryURL;
var nyresults;


function searchArticles(){
  $.ajax({url: queryURL, method: 'GET' }).done(function(response){
    nyresults = response.response.docs[0];
    console.log(nyresults.headline.main);

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



$(document).ready(function(){
    console.log("hello");

    $('#s').click(function(){
      retrieveValues();
      searchArticles();

      return false;
    });

    $('#c').on('click', function(){
      $('#')
      return false;
});

});

