// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcvbOVoJc-wFPE9iV1l1-lt6KvTjAUwik",
    authDomain: "simple-todo-app-d49b9.firebaseapp.com",
    projectId: "simple-todo-app-d49b9",
    storageBucket: "simple-todo-app-d49b9.appspot.com",
    messagingSenderId: "689648675891",
    appId: "1:689648675891:web:93cd242975752dec6fc746"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;