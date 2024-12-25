var myHttp = new XMLHttpRequest();
let ad = document.querySelector(".ad");
let row = document.querySelector(".row");
let search=document.querySelector("input");
document.querySelector("button").addEventListener("click", getData);
search.addEventListener("change",function()
 {
  if(search.value==this.value)
    {
      getData(this.value);
    }
 })
 getData("cario");
function getData(data)
{
myHttp.open("GET",`https://api.weatherapi.com/v1/forecast.json?key=8ecd879a27c547edabd225030241409&q=${data}&days=3&aqi=yes&alerts=no`);
myHttp.send();
myHttp.addEventListener("readystatechange",function(){
  if (this.readyState == 4) {
    let data = JSON.parse(myHttp.response);
    showCurrentWeather(data);
  }
});
}
function showCurrentWeather(myData) {
  let location = myData.location.name;
  let temp = myData.forecast.forecastday[0].day.avgtemp_c;
  let subWeather = myData.current.condition.text;
  let logoo = myData.current.condition.icon;
  let maxtemp1 = myData.forecast.forecastday[1].day.maxtemp_c;
  let mintemp1 = myData.forecast.forecastday[1].day.mintemp_c;
  let text = myData.forecast.forecastday[1].day.condition.text;
  let maxtemp2 = myData.forecast.forecastday[2].day.maxtemp_c;
  let mintemp2 = myData.forecast.forecastday[2].day.mintemp_c;
  let text2 = myData.forecast.forecastday[2].day.condition.text;
  
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let d = new Date(myData.forecast.forecastday[0].date);
  let d1 = new Date(myData.forecast.forecastday[1].date);
  let d2 = new Date(myData.forecast.forecastday[2].date);
  let day = weekday[d.getDay()];
  let day2 = weekday[d1.getDay()];
  let day3 = weekday[d2.getDay()];
  console.log(subWeather);
  row.innerHTML = `<div class="spaceDiv text-white  col-sm-12 col-lg-3 ">
             <div class="introdiv2">
               <p class="mt-2 mb-1 text-white-50">${day}</p>
             </div>
              <h5 class="pt-2">${location}</h5>
              <p class="fss d-inline-block fw-bold">${temp}<sup>o</sup>c</p>
              <img class="pe-5 logo" src="${logoo}" alt="" >
                 <p class="fs-6 text-primary">${subWeather}</p>
                  <div class="d-flex justify-content-around">
                <div>  <img src="./imgs/icon-umberella.png" alt="">  <span>20%</span></div>
               <div>  <img src="./imgs/icon-compass.png" alt="">  <span>20%</span></div>
               <div>   <img src="./imgs/icon-wind.png" alt=""> <span>20%</span></div>
           </div>
           </div>
           <div class="spaceDiv2 text-white">
             <div class="introdiv2">
                 <p class="mt-2 mb-1 text-white-50">${day2}</p>
             </div>
               <img src="./imgs/113.png" alt=""  class="center mb-2">
              <p class="card-text fs-4 fw-bold text-center">${maxtemp1}<sup>o</sup>c</p>
              <p class="card-text fs-6  text-center">${mintemp1}<sup>o</sup>c</p>
              <P class="text-center text-primary">${text}</P>
           </div>
           <div class="spaceDiv3 text-white">
             <div class="introdiv2">
                   <p class="mt-2 mb-1 text-white-50">${day3}</p>
             </div>
               <img src="./imgs/113.png" alt=""  class="center mb-2">
              <p class="card-text fs-4 fw-bold text-center">${maxtemp2}<sup>o</sup></p>
              <p class="card-text fs-6  text-center">${mintemp2}<sup>o</sup></p>
              <P class="text-center text-primary">${text2}</P>
           </div>`;
}



