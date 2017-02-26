$(document).ready(function() {
  var tempKelvin = 0;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $.ajax({
        cache: false,
        url: "http://api.openweathermap.org/data/2.5/weather",
        data: {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          APPID: "c2b2331092dcd4ce4a98d60e9adbf234"
        },
        dataType: "json",
        success: function(data) {
          updateWeatherIcon(data.weather[0].icon);
          tempKelvin = data.main.temp;
          updateTempFahrenheit(tempKelvin);
          updateLocation(data.name);
        }
      });
    });
  }

  $("#fahrenheit").on("click", function() {
    updateTempFahrenheit(tempKelvin);
  });

  $("#celcius").on("click", function() {
    updateTempCelcius(tempKelvin);
  });

});

function updateLocation(location) {
  $("#location").html(location);
}

function updateTempFahrenheit(kelvin) {
  var fahrenheit = (9 / 5) * (kelvin - 273) + 32;
  $("#temp").html(Math.round(fahrenheit) + "&deg; F");
}

function updateTempCelcius(kelvin) {
  var celcius = kelvin - 273;
  $("#temp").html(Math.round(celcius) + "&deg; C");
}

function updateWeatherIcon(iconCode) {
  var iconCss = "wi ";
  switch (iconCode) {
    case "01d":
      iconCss += "wi-day-sunny";
      break;
    case "01n":
      iconCss += "wi-night-clear";
      break;
    case "02d":
      iconCss += "wi-day-cloudy";
      break;
    case "02n":
      iconCss += "wi-night-alt-cloudy";
      break;
    case "03d":
    case "03n":
      iconCss += "wi-cloud";
      break;
    case "04d":
    case "04n":
      iconCss += "wi-cloudy";
      break;
    case "09d":
    case "09n":
      iconCss += "wi-showers";
      break;
    case "10d":
      iconCss += "wi-day-rain";
      break;
    case "10n":
      iconCss += "wi-night-alt-rain";
      break;
    case "11d":
    case "11n":
      iconCss += "wi-thunderstorm";
      break;
    case "13d":
    case "13n":
      iconCss += "wi-snow";
      break;
    case "50d":
    case "50n":
      iconCss += "wi-fog";
      break;
    default:
      iconCss += "wi-alien";
  };

  $(".icon-weather").html('<i class="' + iconCss + '"></i>');
}
