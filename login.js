// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");

const firebaseConfig = {
    apiKey: "AIzaSyCnWMpUwcjLCkp1hUaDPdTo8rMpQmq55uI",
    authDomain: "flowpages-4bb9d.firebaseapp.com",
    databaseURL: "https://flowpages-4bb9d.firebaseio.com",
    projectId: "flowpages-4bb9d",
    storageBucket: "flowpages-4bb9d.appspot.com",
    messagingSenderId: "200128770846",
    appId: "1:200128770846:web:92308a2d5daa5e0614cf0f",
    measurementId: "G-JSFE623B02"
};
firebase.initializeApp(firebaseConfig);
export default function Login() {
}