//for weather API
let weather = {
    //given api key
    apiKey: "e403ac6262c6335a2e789b89dbb293d7",

    //get information from server using api link with my api key
    getWeather: function(){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Chino%20Hills,%20US,uk&units=imperial&APPID=" + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    //display fetched data on website
    displayWeather: function (data) {
        //extract values from api
        const { temp, feels_like, temp_min, temp_max } = data.main;
        //display extracted values
        console.log(temp, feels_like, temp_min, temp_max);
        document.querySelector(".temp").innerText = temp + "F";
        document.querySelector(".feels").innerText = "Feels Like: " + feels_like + "F";
        document.querySelector(".maxTemp").innerText = "Max Temp: " + temp_max + "F";
        document.querySelector(".minTemp").innerText = "Min Temp: " + temp_min + "F";
    },
};

//run getWeather function on page start up and refresh
weather.getWeather();

function message() {
    window.alert("YOU CAN DO IT!"); 
}

var counter = 0;
function count() {
    counter++;
    window.alert("You have pressed this: " + counter +" times!");
}
