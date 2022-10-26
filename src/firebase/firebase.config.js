// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBEXjXRRxscJjohcRZkNdb7hsqGdqMQTI",
    authDomain: "learning-platform-a058f.firebaseapp.com",
    projectId: "learning-platform-a058f",
    storageBucket: "learning-platform-a058f.appspot.com",
    messagingSenderId: "180119163451",
    appId: "1:180119163451:web:a4d77b9f513813e454821e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;