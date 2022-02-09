const throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
// const submitBtn

formRef.addEventListener('input', throttle(formListener, 1000));
formRef.addEventListener('submit', submitBtn);
const STORAGE_KEY = 'feedback-form-state';

function formListener(e) {
  const form = e.target.closest('form');
  const formData = new FormData(form);
  const finalData = {};

  // const { email, message } = form.elements;
  // finalData[email.name] = email.value;
  // finalData[message.name] = message.value;

  // console.log(form);

  for (const [key, value] of formData.entries()) {
    finalData[key] = value;
  }
  // console.log(finalData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(finalData));
}

saveTextArea();

function saveTextArea() {
  const localData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const { email, message } = formRef.elements;
  // console.log(message.value);
  if (localData) {
    (email.value = localData.email), (message.value = localData.message);
  }
}

function submitBtn(e) {
  e.preventDefault();
  const { email, message } = formRef.elements;
  if (!email.value || !message.value) {
    alert('Please fill in all the fields!');
    return;
  }
  console.log(`${email.name}: ${email.value}`);
  console.log(`${message.name}: ${message.value}`);

  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
}
