const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const time = document.querySelector('#time');
const tujuan = document.querySelector('#tujuan');
const number = document.querySelector('#number');
const submit = document.querySelector('#submit');

submit.addEventListener('click', (event)=>{
    event.preventDefault();

    //username validation
    if(username.value.trim() === ''){
        error(username, 'usernema can not be empty');
    } else {
        success(username)
    }

    if(email.value.trim() === ''){
        error(email, 'usernema can not be empty');
    } else {
        success(email)
    }

    if(password.value.trim() === ''){
        error(password, 'usernema can not be empty');
    } else {
        success(password)
    }

    if(time.value.trim() === ''){
        error(time, 'usernema can not be empty');
    } else {
        success(time)
    }

    if(tujuan.value.trim() === ''){
        error(tujuan, 'usernema can not be empty');
    } else {
        success(tujuan)
    }
    if(number.value.trim() === ''){
        error(number, 'usernema can not be empty');
    } else {
        success(number)
    }
});

function error(element, msg) {
    element.style.border = '3px red solid';
    const parent = element.parentElement;
    const small = parent.querySelector('small')
    small.textconten = msg;
    small.style.visibility = 'visible';
}

function success(element){
    element.style.border = '3px green solid';
    const parent = element.parentElement;
    const small = parent.querySelector('small')
    small.style.visibility = 'hidden';
}

