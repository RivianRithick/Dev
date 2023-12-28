fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      const flag = country.flags.png; 
      console.log(flag); 
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
