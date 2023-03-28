
function loadData(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => desplyCountry(data))
}

function desplyCountry(data){
    const countryContainer = document.getElementById('country-container');
    for(const country of data){
        const newDiv = document.createElement('div');
        newDiv.classList.add('country')
        newDiv.innerHTML = `
        <img src="${country.flags.svg}" alt=""/>
        <h1>${country.name.common}</h1>
        <button onclick="clickHandler('${country.cca3}')"> click</button>
        `;
        countryContainer.appendChild(newDiv);
    }
}

const clickHandler = code =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data => desplyCountryDetels(data[0]))
}
const desplyCountryDetels = country =>{
    console.log(country)
    const infoContainer = document.getElementById('info-container');
    infoContainer.innerHTML = `
    <div class="img">
    <img src="${country.flags.svg}" alt=""/>
    </div>
    <div class="info">
    <h1>${country.name.common}</h1>
    <p>Area: ${country.area}</p>
    <p>Population: ${country.population}</p>
    <p>Capital: ${country.capital}</p>
    <p>Region: ${country.region}</p>
    </div>
    `
}
loadData()
