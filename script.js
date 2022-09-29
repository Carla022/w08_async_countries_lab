window.addEventListener('DOMContentLoaded', () => {
    //place button 

    //fetching a response
    const fetchCountries = async () => {
 //fetch is an asynchronous funciton 
        try {

            const response = await fetch("https://restcountries.com/v3.1/all"); // returns a promise
            //naming things in a pluralised way, means its a collection of things e.g. arrays
            const jsonData = await response.json();
    
            createCountryList(jsonData);

        } catch {
            const h2 = document.querySelector("h2")
            
        }

        

    }


    //this allows the countries to be loaded without the need for a button:
    // fetchCountries();

    const countryBtn = document.querySelector("#countries-button");
    countryBtn.addEventListener("click", getCountries)

})