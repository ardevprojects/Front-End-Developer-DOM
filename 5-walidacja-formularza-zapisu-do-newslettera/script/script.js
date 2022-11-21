let newsletterForm = document.getElementById('newsletter-form');
let allChecked = document.getElementById('all-checked');

const validate = (event) => {

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let agree1 = document.getElementById('cookies-checked');
    let agree2 = document.getElementById('ciasteczka-checked');

    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if (name.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imie i nazwisko!';
        errors.appendChild(liError);
    }

    if (email.value.trim() === '' ) {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz e-mail!';
        errors.appendChild(liError);
    }

    if (!email.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Adres e-mail musi zawierać @';
        errors.appendChild(liError);
    }

    if (!agree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraziłeś zgody na cookies!';
        errors.appendChild(liError);
    }

    if (!agree2.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraziłeś zgody ciasteczka!';
        errors.appendChild(liError);
    }

    if(errors.children.length > 0) {
        event.preventDefault();
    }

}

const allAgree = (event) => {
    let agree1 = document.getElementById('cookies-checked');
    let agree2 = document.getElementById('ciasteczka-checked');
    
    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
}

newsletterForm.addEventListener('submit', validate);
allChecked.addEventListener('change', allAgree);