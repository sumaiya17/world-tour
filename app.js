fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data));

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
      //  const country = countries[i];
       const countryDiv = document.createElement('div'); 
       countryDiv.className = ('country');
       const countryInfo = `
          <h3 class="country-name">${country.name}</h3>
          <p>${country.capital}</p>
           <button onclick="displayCountryDetail('${country.name}')">details</button>
         `;
       countryDiv.innerHTML = countryInfo;
       countriesDiv.appendChild(countryDiv);
    });
   
}

const displayCountryDetail = name =>  {
  const url =  `https://restcountries.eu/rest/v2/name/${name}`
fetch(url) 
.then(res => res.json())
.then(data => renderCountryInfo(data[0]));
}
const renderCountryInfo = country => {
  const countryDiv = document.getElementById('countryDetail');
  console.log(country);
   countryDiv.innerHTML = `
      <h1>${country.name}</h1>
      <p>Population: ${country.population}</p>
      <p>area: ${country.area}</p>
     <img src="${country.flag}">
      
      

   `
}