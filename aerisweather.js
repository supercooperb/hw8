var weather;
var windSpeed;

function preload() {
    // var zipCode = "paris, france";
    // var zipCode = "80303";
    var zipCode = "19107";

    var ID = "W4fYWfUPF5NoTVIWKF5r1";
    var SECRET = "N1xug1ZMyF9OWyVTPZSsqNSMlxhFgDma2Dsj0OzA";
    var url = 'https://api.aerisapi.com/observations/' + zipCode +
              '?client_id=' + ID + '&client_secret=' + SECRET;
    print("Fetching", url);
    weather = loadJSON(url);
}

function setup() {
    createCanvas(400, 200);
    windSpeed = weather.response.ob.windMPH;
    print("Wind Speed:", windSpeed);
}

function draw() {
    background(220);
    for (var y = 20; y < height-10; y += 20) {
        line(20, y, 20+random(4) + windSpeed * 10, y+random(-2, 2));
    }
}
