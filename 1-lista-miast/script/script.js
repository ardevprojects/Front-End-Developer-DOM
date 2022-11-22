let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Harare'];
let citiesList = document.getElementById(`cities-list`);

citiesList.innerHTML = `<h2>Cities list:</h2>`

cities.forEach(element => {
        let city = document.createElement('li');
        city.classList.add(`city`);
        city.innerText = element;
        citiesList.appendChild(city);
    });
