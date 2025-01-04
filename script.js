const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLoginPopup = document.querySelector('.btnLogin-popup');
const btnRegisterPopup = document.querySelector('.btnRegister-popup');
const closeIcon = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnLoginPopup.addEventListener('click', () => {
    if (wrapper.classList.contains('active-popup')) {
        if (wrapper.classList.contains('active')) {
            wrapper.classList.remove('active');
        } else {
            wrapper.classList.remove('active-popup');
        }
    } else {
        wrapper.classList.remove('active');
        wrapper.classList.add('active-popup');
    }
});

btnRegisterPopup.addEventListener('click', () => {
    if (wrapper.classList.contains('active-popup')) {
        if (wrapper.classList.contains('active')) {
            wrapper.classList.remove('active-popup')
        } else {
            wrapper.classList.add('active');;
        }
    } else {
        wrapper.classList.add('active');
        wrapper.classList.add('active-popup');
    }
});

closeIcon.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
