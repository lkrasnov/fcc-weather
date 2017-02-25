$(document).ready(function() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      //$("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
    });
  }

  $("#getQuote").on("click", function() {
    $.ajax({
      cache: false,
      url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
      dataType: "json",
      success: function(data) {
        var quote = data[0];
        var quoteContent = quote.content.slice(3, quote.content.length - 5);
        var quoteTitle = quote.title;

        $(".quote-content").html(quoteContent);
        $(".quote-title").html("— " + quoteTitle.toUpperCase());
        $(".quote").removeClass("hide"); 
        $("#tweet").attr("href", "http://twitter.com/home?status=" + quoteContent + " — " + quoteTitle);
      }
    });
  });

});

function getWeather() {
  return {
    "coord": {
      "lon": -87.73,
      "lat": 42
    },
    "weather": [{
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01n"
    }],
    "base": "stations",
    "main": {
      "temp": 265.379,
      "pressure": 1017.61,
      "humidity": 100,
      "temp_min": 265.379,
      "temp_max": 265.379,
      "sea_level": 1042.07,
      "grnd_level": 1017.61
    },
    "wind": {
      "speed": 4.35,
      "deg": 248.001
    },
    "clouds": {
      "all": 0
    },
    "dt": 1486695892,
    "sys": {
      "message": 0.0073,
      "country": "US",
      "sunrise": 1486731171,
      "sunset": 1486768680
    },
    "id": 4899988,
    "name": "Lincolnwood",
    "cod": 200
  };
}

function displayWeather(weather) {

}
