let stopwatch = document.querySelector(".mainContainer");
let timezone = document.querySelector(".timeZone");

let timeZonebutton = document.querySelector(".timeZonebutton");

timeZonebutton.addEventListener("click", () => {
  stopwatch.style.display = "none";
  timezone.style.display = "block";
});

let inputdata = document.querySelector(".inputdata");
let searchbutton = document.querySelector(".searchbutton");
let timeZonetimere = document.querySelector(".timeZonetimere");
let showtime = document.getElementById("time");
let showtimezone = document.getElementById("timezone");


// onclick fetch data from this api "https://worldtimeapi.org/api/timezone"
searchbutton.addEventListener("click", () => {
  fetch("https://worldtimeapi.org/api/timezone")
    .then((responce) => {
      return responce.json();
    })
    .then((data) => {
      data.forEach((element, indx) => {
        // here actal json data comes of all timezone's
        let have = fetch(`https://worldtimeapi.org/api/timezone/${element}`);
        have
          .then((alldata) => {
            return alldata.json();
          })
          .then((actualalldata) => {
            let time = actualalldata.datetime;
            let Zone = actualalldata.timezone;
            let firstdata = Zone.split("/");
        //  this line of code to show data in actual page....
            if (inputdata.value == firstdata[0] || inputdata.value == firstdata[1] || inputdata.value == firstdata[2]) {
              showtime.innerText = time.substr(11, 8);
              showtimezone.innerText = Zone;
              inputdata.value = "";
            }
          });
      });
    });
});

document.getElementById("ChangeStopwatch").addEventListener("click" , ()=>{
  stopwatch.style.display = "block";
  timezone.style.display = "none";
})