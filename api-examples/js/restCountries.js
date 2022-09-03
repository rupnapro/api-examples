const loadCountries = () =>{
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data =>displayCountries(data));
}
const displayCountries = countries =>{
    // for(const country of countries){
    //     console.log(country);
    // }
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        // console.log(country);
        countryDiv.innerHTML = `
        <h3> Name:${country.name.common}</h3>
        <p> Capital: ${country.capital ? country.capital[0]: 'No Capital'}</p>
        <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        
        `;
        countriesContainer.appendChild(countryDiv);
    })
    
}
const loadCountryDetail = (code) =>{
    const url =`https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res =>res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country =>{
    console.log(country)
}

loadCountries();