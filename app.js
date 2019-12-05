

var request = new XMLHttpRequest();

request.open("GET", "https://swapi.co/api/planets/", true);
request.onload = function ()
{
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400)
    {
        data.results.forEach(planet =>
        {
            document.getElementById('get').addEventListener('click', myFunction)
            function myFunction()
            {
                const tbody = document.getElementById('tbody')
                const tr = document.createElement('tr')
                const td0 = document.createElement('td')
                const td1 = document.createElement('td')
                const td2 = document.createElement('td')
                const td3 = document.createElement('td')
                const td4 = document.createElement('td')
                const td5 = document.createElement('td')
                const td6 = document.createElement('td')
                const td7 = document.createElement('td')
                const td8 = document.createElement('td')

                td0.textContent = planet.name
                td1.textContent = planet.rotation_period
                td2.textContent = planet.orbital_period
                td3.textContent = planet.diameter
                td4.textContent = planet.climate
                td5.textContent = planet.gravity
                td6.textContent = planet.terrain
                td7.textContent = planet.surface_water
                td8.textContent = planet.population

                tbody.appendChild(tr)
                tr.appendChild(td0)
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                tr.appendChild(td4)
                tr.appendChild(td5)
                tr.appendChild(td6)
                tr.appendChild(td7)
                tr.appendChild(td8)

            }


        });

    } else
    {
        alert("Request error sorry")
    }
};

request.send();