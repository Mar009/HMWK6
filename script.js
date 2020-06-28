var button=document.getElementsByClassName("btn btn-outline-success my-2 my-sm-0")

$("button" ).on("click", function(){
    event.preventDefault();

    var search=$(this).type(":submit");
    var queryURL= "api.openweathermap.org/data/2.5/forecast?id=" + search + "&appid=7e3154185511d5ccdc5d2529706fdf8f"

    // pull from the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"

    }).then (function(response){
        // make the general card for the info
        var cardForCurrent = $("<div>").attr("class","card-header").text("Current weather for "+ response.name);
        $("#forecast").append(cardForCurrent);

        var cardRow=$("<div>").attr("class", "row no-gutters");
        cardForCurrent.append(cardRow);

        //imgs for weather
        var iconsURL= " https://openweathermap.org/img/wn/"+response.weather[0].icon;
        var divImg= $("<div>").attr("clas", "col-md-5").append($("<img>").attr("src",iconsURL).attr("class","card-img"));
        
        // have name & date 
        var headCard = $("<div>").attr("class")
        // temp 
        // humidity % 
        // Wind Speed 
         // UV index 

        // make smaller cards for the next 5 days 
            // have dates 
            // icon 
            // temp in F 
            // Humidty

    })

    // Save search history append to id=searchesOld
    function searchHistory(){
        let searchList = $("<li>").addClass("list-group-item").text(city);
        $("#searchesOld").append(searchList);
    }
    searchHistory();

 });