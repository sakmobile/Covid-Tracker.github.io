
let new_total_cases = document.getElementById("total_cases");
let total_deaths = document.getElementById("total_deaths");
let total_recovered = document.getElementById("total_recovered");
let new_cases = document.getElementById("new_cases");
let new_deaths = document.getElementById("new_deaths");
let table = document.getElementById("countries_stat");

    fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "2e5184577emsha3d1e4c5425cdaap1d741djsn99612e7983c9"
        }
    })
    .then(response => response.json().then(data=>{
        console.log(data);
        new_total_cases.innerHTML = data.total_cases;
        total_deaths.innerHTML = data.total_deaths;
        total_recovered.innerHTML = data.total_recovered;
        new_cases.innerHTML = data.new_cases;
        new_deaths.innerHTML = data.new_deaths;
        
    }))
    .catch(err => {
        console.log(err);
    });


    fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "2e5184577emsha3d1e4c5425cdaap1d741djsn99612e7983c9"
        }
    })
    .then(response => response.json().then(data=>{
        console.log(data);
        let countries_stat = data.countries_stat;
        for(let i = 0; i < countries_stat.length; i++){
         console.log(countries_stat[i]);
            let row = table.insertRow(i+1);
            let num = row.insertCell(0);
            let country_name = row.insertCell(1);
            let cases = row.insertCell(2);
            let deaths = row.insertCell(3);
            let serious_critical = row.insertCell(4);
            let total_recovered = row.insertCell(5);
            num.innerHTML = i+1;
            num.classList.add("text-center");
            country_name.innerHTML = countries_stat[i].country_name;
            cases.innerHTML = countries_stat[i].cases;
            deaths.innerHTML = countries_stat[i].deaths;
            serious_critical.innerHTML = countries_stat[i].serious_critical;
            total_recovered.innerHTML = countries_stat[i].total_recovered;
        }
    }))
    .catch(err => {
        console.log(err);
    });

  

