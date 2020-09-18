var apiLink = 'https://ergast.com/api/f1/2008/5/driverStandings.json';

var getAPIBtn = document.querySelector('#getAPI');
getAPIBtn.addEventListener('click', function(event){
    getData();
});

function getData() {

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('It Works');
            //console.log(xhr.responseText);
            var res = JSON.parse(xhr.responseText).MRData.StandingsTable.StandingsLists[0].DriverStandings;
            // <li class="list-group-item liitem"><strong>Position:</strong></li>
            var driverlistUL = document.querySelector('#driverlist');
            
            for (var i in res) {
                if (res.hasOwnProperty(i)) {
                    let driver = res[i];
                    let liTag = document.createElement('li');
                    liTag.setAttribute('class', 'driver list-group-item liitem');
                    liTag.innerHTML = `<strong>${driver.Driver.givenName} ${driver.Driver.familyName}</strong>`;
                    liTag.addEventListener('click', function (event) {
                        document.querySelector('#driver-name-title').innerHTML = `<strong>${driver.Driver.givenName} ${driver.Driver.familyName}</strong>`;
                        document.querySelector('#position').innerText = driver.position;
                        document.querySelector('#points').innerText = driver.points;
                        document.querySelector('#wins').innerText = driver.wins;
                        document.querySelector('#dob').innerText = driver.Driver.dateOfBirth;
                        document.querySelector('#nationality').innerText = driver.Driver.nationality;
                        document.querySelector('#constructor').innerText = driver.Constructors[0].name;
                    });
                    driverlistUL.appendChild(liTag);
                }
            }
        }
    }

    xhr.open('GET', apiLink);
    xhr.send();

}