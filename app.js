var request = new XMLHttpRequest();

request.open("GET", "https://swapi.co/api/planets/", true);
request.onload = function() {
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.results.forEach(planet => {

            document.getElementById('get').addEventListener('click', myFunction)


            function myFunction() {

                document.getElementById("name").innerHTML = (planet.name);
                document.getElementById("rotation_period").innerHTML = (planet.rotation_period);
                document.getElementById("orbital_period").innerHTML = (planet.orbital_period);
                document.getElementById("diameter").innerHTML = (planet.diameter);
                document.getElementById("climate").innerHTML = (planet.climate);
                document.getElementById("gravity").innerHTML = (planet.gravity);
                document.getElementById("terrain").innerHTML = (planet.terrain);
                document.getElementById("surface_water").innerHTML = (planet.surface_water);
                document.getElementById("population").innerHTML = (planet.population);

            }


        });

    } else {
        alert("Maaf browser anda tidak Support")
    }
};

request.send();