
globalThis.document.write(`<H1>Ustaw tlo elementow!</H1>`);
// window.document.write(`<H1>Ustaw tlo elementow!</H1>`);

const setBackground = () => {
    let p1 = document.querySelector(`.paragraf-1`);
    let p2 = document.querySelector(`.paragraf-2`);

    // p1.style.backgroundColor = `red`;
    // p2.style.backgroundColor =  `green`;

    p1.classList.toggle('bg-red');
    p2.classList.toggle('bg-yellow')
}

let btnSetBackground = document.getElementById('set-background');

btnSetBackground.addEventListener(`click`, setBackground);