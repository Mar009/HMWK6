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
        // have name & date 
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

    // Save search history 

 });