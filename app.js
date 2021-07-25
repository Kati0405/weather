// const date = new Date();
// const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
document.getElementById("date").innerHTML = Date();

// function showAvatar() {
// fetch("https://api.github.com/users/Kati0405")
//   .then((res) => res.json())
//   .then((data) => {
//       let img = document.createElement("img");
//       let avatar = data.avatar_url;
//       img.setAttribute("src", avatar);
//       document.body.append(img);
//   });
// }

// document.querySelector("button").addEventListener("click", showAvatar)

function appendImg(iconId) {
let img = document.createElement("img");
img.setAttribute("src", "http://openweathermap.org/img/w/" + iconId +".png");
document.body.append(img);
}

function appendDiv(cls, content){
    let div = document.createElement("div");
        div.setAttribute("class", cls);
        div.textContent = content;
        document.body.append(div);
}

function showWeather(){
    let inp = document.querySelector("input[type=text]")
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inp.value + "&units=metric&APPID=5d066958a60d315387d9492393935c19")
    .then((res) => res.json())
    .then((data) => {
        appendDiv("temp", data.main.temp);
        appendDiv("pressure", data.main.pressure);
        appendDiv("humidity", data.main.humidity);
        appendDiv("feels_like", data.main.feels_like);
        appendDiv("speed", data.wind.speed);
        appendDiv("deg", data.wind.deg);
        appendDiv("description", data.weather[0].description);
        appendImg(data.weather[0].icon)
    })
}

// console.log(showWeather())

// fetch("https://api.openweathermap.org/data/2.5/weather?q=kyiv&units=metric&APPID=5d066958a60d315387d9492393935c19")
//     .then((res) => res.json())
//     .then((data) => console.log(data))

// showWeather()

document.querySelector("input[type=button]").addEventListener("click", showWeather)

