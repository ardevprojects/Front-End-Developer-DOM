
let itemsList = document.getElementById(`items`);

let buttonClicked = document.getElementById(`add-item-button`);

const liElement = document.createElement(`li`);
let elementNr = itemsList.getElementsByTagName(`li`).length;

let addItem = (event) => {
    liElement.innerText = `Item ${elementNr + 1}`;
    itemsList.append(liElement);    
}

buttonClicked.addEventListener(`click`, addItem);