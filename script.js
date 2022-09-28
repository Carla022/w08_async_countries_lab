window.addEventListener('DOMContentLoaded', () => {

    const fetchCountries = () => {

        request =  fetch ("https://restcountries.com/v3.1/all")
        .then((response) => {
           return response.json();

        })
        .then((jsonData) => {
            console.log(jsonData);

        })

    }
    fetchCountries();

})