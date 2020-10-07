$(document).ready(function () {

    // //Search Parameters

    // //Functions
    var searchCity = "";

    //var searchCity = $('#getForecast').click().
    $(".getCurrentForecast").on("click", function () {
        searchCity = $("#searchCity").val();
        userSearch(searchCity);

    })


    function userSearch(searchCity) {
        $.ajax({
            method: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&units=imperial&appid=c117cee7a459aec2dbaac55d5deab3ef",
        }).then(function (response) {
            console.log(response)
            $('#cityName').text("City: " + response.name);
            $('#cityTemp').text("Temperature: " + response.main.temp + " ºF");
            $('#cityHumidity').text("Humidity: " + response.main.humidity + " % Humidity");
            $('#cityWind').text("Wind Speed: " + response.wind.speed + " mph")

            // var iconcode = data.main.weather.
            // var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";

            //  $('.icon').attr({
            //     "src": "https://openweathermap.org/img/w/" + iconcode + ".png",
            //  })
            // displayForecast(searchCity);
            // uvIndex(data....lat, data.....lon)
            
        });

        $.ajax({
                    
            url: "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&units=imperial&cnt=6&appid=c117cee7a459aec2dbaac55d5deab3ef",
            method: "GET"
        }).then(function (response) {
            console.log(response)
            $('#dayOneTime').text(response.list[1].dt_txt)
            $('#dayOneTemp').text(response.list[1].main.temp + " ºF")
            $('#dayOneHumidity').text(response.list[1].main.humidity + " %")
            $('#dayOneWind').text(response.list[1].wind.speed + " mph")
            //$('#dayOneUv')

            $('#dayTwoTime').text(response.list[2].dt_txt)
            $('#dayTwoTemp').text(response.list[2].main.temp + " ºF")
            $('#dayTwoHumidity').text(response.list[2].main.humidity + " %")
            $('#dayTwoWind').text(response.list[2].wind.speed + " mph")
            //$('#dayTwoUv')

            $('#dayThreeTime').text(response.list[3].dt_txt)
            $('#dayThreeTemp').text(response.list[3].main.temp + " ºF")
            $('#dayThreeHumidity').text(response.list[3].main.humidity + " %")
            $('#dayThreeWind').text(response.list[3].wind.speed + " mph")
            //$('#dayThreeUv')

            $('#dayFourTime').text(response.list[4].dt_txt)
            $('#dayFourTemp').text(response.list[4].main.temp + " ºF")
            $('#dayFourHumidity').text(response.list[4].main.humidity + " %")
            $('#dayFourWind').text(response.list[4].wind.speed + " mph")
            //$('#dayFourUv')

            $('#dayFiveTime').text(response.list[5].dt_txt)
            $('#dayFiveTemp').text(response.list[5].main.temp + " ºF")
            $('#dayFiveHumidity').text(response.list[5].main.humidity + " %")
            $('#dayFiveWind').text(response.list[5].wind.speed + " mph")
            //$('#dayFiveUv')
        })





    }

    // var searchForecast.on("click", function)
    //     displayForecast(searchForecast)

    // $("#getWeekForecast").on("click", function () {
    //     var searchForecast = $("#searchForecast").val();
    //     displayForecast(searchForecast);
    // })

    


    //function uvIndex (latitude, longitude) {
    // ajax call
    // then
    //console log to find your date
    // apply datea to forecasts
    //}
    // }
    // };
    //   $(".cityName").text(data.main);
    //   $.each(data.weather, function(index, val) {
    //    $("#showWeather").html(JSON.stringify(data))

    // };
    //  $('#getForecast').append("#showWeather"); //

    //function renderSearchHistory() {


    //}










    //Main Processes

    //1.Retrieve user inputs and convert to variables
    //2. Use those variables to trun an AJAX calls to API, which will provie us with a JSON object
    //3. Retrieve each API object into useable fields
    //4.Generate html content onto page

});




