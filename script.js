

async function getGames() {

    const url = 'https://api.rawg.io/api/games?slug=race-for-tuning';

    const resultsContainer = document.querySelector('.results');

    const loader = document.querySelector(".loading");

    try {

        const response = await fetch(url);

        const list = await response.json();

        const facts = list.results;

        loader.remove();



        for (let i = 0; i < facts.length; i++) {

            //console.log(facts[i].tags);

            if (i === 8) {

                break;

            }

            resultsContainer.innerHTML += `
            <div>
            <ul>
            <li>Name: <a href="details.html?${facts[i].slug}"> ${facts[i].name}</a></li> 
            </div>`;

        }

    } catch (error) {

        console.log('error occured', error);

        resultsContainer.innerHTML = 'Error!';

    }

}







async function gameDetails() {

    const slug = window.location.search;

    let name = slug.replace("?", "");

    const apiUrl = "https://api.rawg.io/api/games/" + name;

    let resultsContainer = document.querySelector(".results");

    const loader = document.querySelector(".loading");

    try {

        const response = await fetch(apiUrl);

        const list = await response.json();

        loader.remove();




        resultsContainer.innerHTML += `
            <div>
            <img class="img" src="${list.background_image}" alt="${list.slug}">
            <ul>
            <li>Name: ${list.name}</li>
            <li>Rating: ${list.rating}</li> 
            <li>Rating count: ${list.ratings_count}</li> 
            <li>Released: ${list.released}</li>
            </ul>
            <div>
            <a href="index.html">Back to games</a>
            </div> 
            </div>`;



    } catch (error) {

        console.log('error occured', error);

        resultsContainer.innerHTML = 'Error!';

    }

}



function validateForm() {

    let name = document.querySelector("#name").value;

    let subject = document.querySelector("#subject").value;

    let email = document.querySelector("#email").value;

    let adress = document.querySelector("#adress").value;


    let error = document.querySelector(".error");
    error.innerHTML = "";

    if (name == null || name == "") {
        return error.innerHTML = 'Name cannot be empty.';
    }

    if (subject == null || subject == "") {
        return error.innerHTML = 'Subject cannot be empty.';
    }

    if (subject.length < 10) {
        return error.innerHTML = 'Subject cannot be less than 10 chars.';
    }

    if (email == null || email == "") {
        return error.innerHTML = 'Email cannot be empty.';
    } else if (emailIsValid(email) == false) {
        return error.innerHTML = 'Please provide an correct e-mail adress.';
    }

    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email)
    }

    if (adress == null || adress == "") {
        return error.innerHTML = 'Adress cannot be empty.';
    }

    if (adress.length < 25) {
        return error.innerHTML = 'Adress cannot be less than 25 chars.';
    }

    submitForm();

}

function submitForm() {
    let form = document.querySelector(".form");
    form.innerHTML = "<h1>Thank you for your submittion.</h1>";
}

