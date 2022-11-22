console.log(`hello`);

let itemsList = document.getElementById(`items`);
let buttonClicked = document.getElementById(`add-item-button`);

const liElement = document.createElement(`li`);

let elementNr = 4;
liElement.innerText = `Item ${elementNr++}`;

itemsList.append(liElement);



// const addNewItem = (event) => {
//     // console.log(`add`);
    // let liElement = document.createElement(`li`);
    // document.createTextNode(`item 4`)
    // itemsList.appendChild(liElement);
// };


// itemsList.addEventListener(`click`, addNewItem);



// element.addEventListener("click", function() {
//     // document.getElementById("demo").innerHTML = "Hello World";
//   });



// let liElement = document.createElement(`li`);
// let textNode = document.createTextNode(`item 4`)


// const submitForm = (event) => {
//     event.preventDefault();
    
//     let firstName = document.querySelector('[name="fname"]');
//     let lastName = document.querySelector('[name="lname"]');

//     console.log(`Imię: ${firstName.value}, Nazwisko: ${lastName.value}`)
// }

// let form = document.getElementById('form');

// form.addEventListener('submit', submitForm);

