console.log("hello")
//global variables
const apikey = '4c8cde2f7d9c45bcb49909924120e35a'
var searchKeyword = 'Cannabis'
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
var begin_date = "20180101"
var end_date = "20181230"

//search button click 
$("#search-button").on("click", function () {
    event.preventDefault()

    //setting searchKeyword to form value
    var searchKeyword = $("#search-form").val()
    var begin_date= $("#begin_date").val()
    var end_date= $("#end_date").val()


    console.log(searchKeyword)

    //ajax callvar url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  
    var qurl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apikey}&q=${searchKeyword}&begin_date=${begin_date}&end_date=${end_date}&limit=3`  
    console.log(qurl)

    $.ajax({
        url: qurl,
        method: 'GET',
    }).done(function (result) {


        console.log(result)
        var arr = result.response.docs

        var appendedArticles = 0

        $("#results-container").empty()
        arr.forEach((doc) => {
            console.log(doc)
            var div = $("<div>")
            div.append($("<h3>").text(doc.headline.main))
            div.append($("<p>").text(doc.snippet))
            div.append($("<a>").text("link to article").attr("href", doc.web_url))
            div.append($("<hr>"))
            $("#results-container").append(div)
        })

    }).fail(function (err) {
        throw err;
    });
})

