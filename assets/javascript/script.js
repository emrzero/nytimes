var searchTerm;
var numOfRecords;
var startDate;
var endDate;

// var apiKey = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931';
var apiKey = '7243270b1b81449887ca3f4f0b4d35f0';
var queryURL;
var nyresults;

function eQ (){
    retrieveValues();
    searchArticles();
    printResults();
    return false;
}

function searchArticles(){
  $.ajax({url: queryURL, method: 'GET' }).done(function(response){
    console.log(response);
    nyresults = response.response.docs;
    console.log(nyresults[0].headline.main);

  });
}

// function resetFields(){

// }


function retrieveValues(){
  
  searchTerm = $('#searchTerm').val();
  numOfRecords = $('#num').val();
  startDate = $('#startYear').val();
  endDate = $('#endYear').val();

  queryURL ='https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchTerm + '&api-key=' + apiKey;

}

function printResults() {
  for (var i = 0; i < 5; i++){
    console.log(nyresults[i].headline.main);

    var newDiv = $('<div>');

    var h = $('<h1>');
    h.text(nyresults[i].headline.main);
    newDiv.append(h);

    var p = $('<p>');
    // p.html(nyresults[i].byline.original);
    // newDiv.append(p);

    p.html(nyresults[i].pub_date);
    newDiv.append(p);

    $('#resultsText').append(newDiv);
  }
}



$(document.body).on('click', '#s', function(){
  console.log(searchTerm);
  return false;
});

    $('#c').on('click', function(){
      $('#search').val('');
        return false;
    });


