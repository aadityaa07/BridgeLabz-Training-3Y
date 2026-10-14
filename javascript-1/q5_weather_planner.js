// Q5. Weather Activity Planner
const temperature = 28; // °C
const isRaining = false;
const windSpeed = 12;   // km/h

let advice;
if (isRaining) {
  advice = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
  advice = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
  advice = "Too cold and windy — stay home.";
} else {
  advice = "Perfect day for a walk.";
}

console.log(`Temp: ${temperature}°C | Raining: ${isRaining} | Wind: ${windSpeed} km/h`);
console.log(advice);
