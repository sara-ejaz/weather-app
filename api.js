let btn = document.getElementById("searchBtn");
let temperature = document.getElementById("temperature");
let input = document.getElementById("cityInput");
let wind = document.getElementById("wind");
let city = document.getElementById("cityName");
let humidity = document.getElementById("humidity");


let runfunction = async ()=>{
    
    let location = input.value;
    let URL =`https://goweather.herokuapp.com/weather/${location}`;
    
    let responce =await fetch(URL);
    let data =await responce.json();
    city.innerText = location;
    // console.log(name);

    console.log(data);
   temperature.innerText = (data.temperature);
    humidity.innerText = (data.description);
   wind.innerText = (data.wind);
}

btn.addEventListener("click",runfunction);