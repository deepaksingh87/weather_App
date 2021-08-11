const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const getInfo = async(event) => {
  event.preventDefault();
  let cityValue = cityName.value;
  if (cityValue === "") {
    city_name.innerText = "please enter some value";
  } else {
    try {
      let url = `api.openweathermap.org/data/2.5/weather?q=pune&appid=5a7e8e4105cd3e63508dcddc2908e8e4`;
      let url1="api.openweathermap.org/data/2.5/weather?q=London&appid=5b461440e1685319b25be8567c5c1d7d";

       const responsive = await fetch(url1);
       const data = await responsive.json();
      console.log(responsive);
    } catch (error) {
      console.log("error is", error);
    }
  }
};
submitBtn.addEventListener("click", getInfo);
