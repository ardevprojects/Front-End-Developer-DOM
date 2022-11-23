
let itemsList = document.getElementById(`items`);

let buttonClicked = document.getElementById(`add-item-button`);


let addItem = () => {
    let liElement = document.createElement(`li`);
    let elementNr = itemsList.getElementsByTagName(`li`).length;
    liElement.innerText = `Item ${elementNr + 1}`;
    itemsList.append(liElement);
    itemsList.classList.add(`item`)    
}

buttonClicked.addEventListener(`click`, addItem);

console.log(`Hi`);