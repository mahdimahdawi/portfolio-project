function formData(){
  const jsObj = JSON.parse(localStorage.getItem('jsObj'));
  jsObj.name = document.querySelector('#name').value;
  jsObj.email = document.querySelector('#email').value;
  jsObj.message = document.querySelector('#message').value;
  localStorage.setItem('jsObj', JSON.stringify(jsObj));
}

function checkStorage(){
  if (!localStorage.getItem('jsObj')) {
    const jsObj = {
      name : '',
      email : '',
      message : '',
    };
    localStorage.setItem('jsObj', JSON.stringify(jsObj));
  } else {
    const jsObj = JSON.parse(localStorage.getItem('jsObj'));
    document.querySelector('#name').value = jsObj.name;
    document.querySelector('#email').value = jsObj.email;
    document.querySelector('#message').value = jsObj.message;
  }
}

window.onload = () => {
  checkStorage();
}

document.querySelector('#name').addEventListener('keydown', formData);
document.querySelector('#email').addEventListener('keydown', formData);
document.querySelector('#message').addEventListener('keydown', formData);
