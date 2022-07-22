function formDataStorageObj(){
  const userData = JSON.parse(localStorage.getItem('userData'));
  userData.name = document.querySelector('#name').value;
  userData.email = document.querySelector('#email').value;
  userData.message = document.querySelector('#message').value;
  localStorage.setItem('userData', JSON.stringify(userData));
}

function checkStorage(){
  if (!localStorage.getItem('userData')) {
    const userData = {
      name : '',
      email : '',
      message : '',
    };
    localStorage.setItem('userData', JSON.stringify(userData));
  } else {
    const userData = JSON.parse(localStorage.getItem('userData'));
    document.querySelector('#name').value = userData.name;
    document.querySelector('#email').value = userData.email;
    document.querySelector('#message').value = userData.message;
  }
}

window.onload = () => {
  checkStorage();
}

document.querySelector('#name').addEventListener('keydown', formDataStorageObj);
document.querySelector('#email').addEventListener('keydown', formDataStorageObj);
document.querySelector('#message').addEventListener('keydown', formDataStorageObj);
