const apiKey = "2e680da7e9a42179a102e21428c9faf6";


async function getWeather() {
 
  const city = document.getElementById("cityInput").value;

  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    
    const response = await fetch(url);

    
    if (!response.ok) throw new Error("City not found");

    
    const data = await response.json();

    
    document.getElementById("cityName").textContent = data.name;

   
    document.getElementById("temp").textContent = `${data.main.temp} °C`;

   
    document.getElementById("condition").textContent = data.weather[0].main;

   
   
    
    document.getElementById("weatherBox").style.display = "block";

  } catch (error) {
   
    alert("Error: " + error.message);
  }
}