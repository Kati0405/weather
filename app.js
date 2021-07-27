function setImg(cls, iconId) {
let div = document.querySelector("."+cls)
div.innerHTML = `<img src="http://openweathermap.org/img/w/${iconId}.png"/>`;
}

function setContent(cls, content){
    let div = document.querySelector("."+cls);
    div.textContent = content;
}

function showWeather(){
    let inp = document.querySelector("input[type=text]")
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inp.value + "&units=metric&APPID=5d066958a60d315387d9492393935c19")
    .then((res) => res.json())
    .then((data) => {
        setContent("temp", data.main.temp+" "+"C");
        setContent("pressure", data.main.pressure+" "+"hPa");
        setContent("humidity", data.main.humidity+"%");
        setContent("feels_like", data.main.feels_like+" "+"C");
        setContent("speed", data.wind.speed+" "+"km/h");
        setContent("description", data.weather[0].description);
        setImg("img-icon", data.weather[0].icon)
    })
}

// console.log(showWeather())

// fetch("https://api.openweathermap.org/data/2.5/weather?q=kyiv&units=metric&APPID=5d066958a60d315387d9492393935c19")
//     .then((res) => res.json())
//     .then((data) => console.log(data))

// showWeather()

document.querySelector("input[type=button]").addEventListener("click", showWeather)

