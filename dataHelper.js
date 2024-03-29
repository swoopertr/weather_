let weather_api = {
    apikey : "0f9bce7e09204105842165055242401",
    getCurrentWeather: async function (city) {
      //http://api.weatherapi.com/v1/current.json?key=0f9bce7e09204105842165055242401&q=istanbul&aqi=yes
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      try {
        let result = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apikey}&q=${city}&aqi=yes`,requestOptions)
        .then((response) => response.text());
        result = JSON.parse(result);
        return result;
      } catch (error) {
        console.log("error: ", error);
        return error;
      }
    },
    getForcastDataWeather: async function (city, days, aqi = "yes", alerts = "yes") {
      //http://api.weatherapi.com/v1/forecast.json?key=0f9bce7e09204105842165055242401&q=istanbul&days=1&aqi=yes&alerts=yes
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      try {
        let result = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${this.apikey}&q=${city}&days=${days}&aqi=${aqi}&alerts=${alerts}`,
          requestOptions
        ).then((response) => response.text());
        result = JSON.parse(result);
        return result;
      } catch (error) {
        console.log("error: ", error);
        return error;
      }
    },
    dtoFunctions: {
      getCurrentWeather: async function(city){
          let return_value = await weather_api.getCurrentWeather(city);
          let result = {
              temp :      return_value.current.temp_c,
              img :       return_value.current.condition.icon,
              img_text:   return_value.current.condition.text,
              last_update:return_value.current.last_updated
          }
  
          return result;
      }
    }
  };
  
  let openMeteo = {
    apikey: "abcskusugauydtaw7d6ta7wd57a6wd57a6w5da76wd",
    getCurrrentIstanbulWeather: async function() {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      try {
        
        let result = await fetch(`https://api.open-meteo.com/v1/forecast?apikey=${this.apikey}latitude=41.0138&longitude=28.9497&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`, requestOptions)
        .then(response => response.text());
        result = JSON.parse(result);
        return result;
      } catch (error) {
        console.log("error: ", error);
        return error;
      }
    }
  };