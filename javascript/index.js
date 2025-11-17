

function updateLosAngelesTime(){
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");


losAngelesDateElement.innerHTML = moment().format("MMMM do yyyy" );
losAngelesTimeElement.innerHTML = moment().tz("America/los_Angeles").format("hh:mm:ss [<small>]A[</small>]");
}

updateLosAngelesTime();
setInterval(updateLosAngelesTime, 1000);

function updateSydneyTime(){
let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement = sydneyElement.querySelector(".date");
let sydneyTimeElement = sydneyElement.querySelector(".time");

sydneyDateElement.innerHTML = moment().format("MMMM do yyyy" );
sydneyTimeElement.innerHTML = moment().tz("Australia/Sydney").format("hh:mm:ss [<small>]A[</small>]");
}
updateSydneyTime();
setInterval(updateSydneyTime, 1000);

function updateIndiaTime(){
let indiaElement = document.querySelector("#india");
let indiaDateElement = indiaElement.querySelector(".date");
let indiaTimeElement = indiaElement.querySelector(".time");

indiaDateElement.innerHTML = moment().format("MMMM do yyyy" );
indiaTimeElement.innerHTML = moment().tz("Indian/Maldives").format("hh:mm:ss [<small>]A[</small>]");
}
updateIndiaTime();
setInterval(updateIndiaTime, 1000);

function updateCity(event){
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
    <div>
        <h2>${cityName} </h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("hh:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>
    `;
    
}



let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
