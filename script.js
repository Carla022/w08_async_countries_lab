window.addEventListener('DOMContentLoaded', () => {
//place button 
    const fetchCountries = () => {

       const requestPromise =  fetch ("https://restcountries.com/v3.1/all")
       
       const jsonDataPromise = requestPromise 
        .then((response) => {
           return response.json();

        })
        jsonDataPromise.then((jsonData) => {
            console.log(jsonData.url);
        })
        //     

        // })

    }
    fetchCountries();

    //fetching a response
    const getCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();

        const countriesData = jsonData.name;

    }

    const countryBtn = document.querySelector("#countries-button");
    countryBtn.addEventListener("click", getCountries)

})