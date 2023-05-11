var key = "af61749fac48e55f7ab09b69b235d6e9";
const temp1 = document.getElementById("temp1")
const wind1 = document.getElementById("wind1")
const hum1 = document.getElementById("hum1")
const mainIcon = document.getElementById("mainIcon")
const today = document.getElementById("today")


function onClick($this) {
    var city = $this.previousElementSibling.value
    if (city == ''){
        console.log("no input");
     } else {
         currentTemp(city);
         localStorage.setItem("key", city);
   }};

   function onClick2($this) {
    var city = $this.value
    if (city == ''){
        console.log("no input");
     } else {
         currentTemp(city);
         localStorage.setItem("key", city);
   }};

function currentTemp(city) {
    for (var i= document.images.length; i-->0;)
        document.images[i].parentNode.removeChild(document.images[i]);
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key;
    fetch(queryURL + "&units=imperial")
    .then(function(response) {
       return response.json();
   })
   .then(function(data) {
       console.log(data)
       temp1.textContent = data.main.temp;
       wind1.textContent = data.wind.speed;
       hum1.textContent = data.main.humidity;
       today.textContent = city    
   })
}
   currentTemp(localStorage.getItem("key"));