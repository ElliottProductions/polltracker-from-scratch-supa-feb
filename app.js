// import functions and grab DOM elements
import { signUpUser, signInUser, redirectToPolls } from './fetch-utils.js';
//import { } from '../half-baked-soccer-keeper-feb/fetch-utils';

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');
//const SignUpButton = document.querySelector('sign-up-button');
console.log(signUpEmail);
const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');
//const SignInButton = document.querySelector('sign-in-button');
// let state

// set event listeners 
signUpForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const user = await signUpUser(signUpEmail.value, signUpPassword.value);
    console.log(`cookie?: ${user}`);
    if (user){

        redirectToPolls();
    } else {
        console.error(user);
    }
});

signInForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    console.log(signInEmail.value, signInPassword.value);
    const user = await signInUser(signInEmail.value, signInPassword.value);

    if (user){
        redirectToPolls();
    } else {
        console.log(user);
    }
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
