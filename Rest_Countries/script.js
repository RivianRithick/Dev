fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      const name = country.name.common; // Access the country name
      const region = country.region; // Access the region
      const subRegion = country.subregion; // Access the sub-region
      const population = country.population; // Access the population

      console.log(`Name: ${name}, Region: ${region}, Sub-region: ${subRegion}, Population: ${population}`);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
