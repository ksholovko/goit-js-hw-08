import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";
let formData = {};
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
restoreFormData();


function onFormInput(evt) {
    
    formData[evt.target.name] = evt.target.value;
    const stringifiedData = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, stringifiedData);

}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
    formData = {};
}

function restoreFormData() {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (!savedData) {
        return;
    }

    const parsedData = JSON.parse(savedData);

    Object.entries(parsedData).forEach(([key, value]) => {
        form[key].value = value;

    });

    formData = parsedData;

}

// function restoreFormData() {
//     const savedData = localStorage.getItem(STORAGE_KEY);

//     if (savedData) {
//         const {email, message} = JSON.parse(savedData);
//         form.email.value = email;
//         form.message.value = message;
//     }
// }

