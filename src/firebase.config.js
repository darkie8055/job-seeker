// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ8lOvlOWsBjlx3UmI9yBGXKM8mJn5Dmo",
  authDomain: "hunt-your-vacancy-29383.firebaseapp.com",
  projectId: "hunt-your-vacancy-29383",
  storageBucket: "hunt-your-vacancy-29383.appspot.com",
  messagingSenderId: "1082620858240",
  appId: "1:1082620858240:web:719d7f7ccafab327c13b65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};