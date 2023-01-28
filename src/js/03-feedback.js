import throttle from 'lodash.throttle';
const STARAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const formData = {};
// const newDateMaz = {};
formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', OnFormSubmit);

setValueFormInput();
function onFormInput({ target }) {
  formData[target.name] = target.value;
  const strFormatData = JSON.stringify(formData);
  localStorage.setItem(STARAGE_KEY, strFormatData);
}

function OnFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(formData);
  localStorage.clear(STARAGE_KEY);
}
function setValueFormInput() {
  const getDataStorage = JSON.parse(localStorage.getItem(STARAGE_KEY));
  if (getDataStorage) {
    const {
      elements: { email, message },
    } = formEl;
    email.value = getDataStorage.email;
    message.value = getDataStorage.message;
  }
}
// console.log(0);
