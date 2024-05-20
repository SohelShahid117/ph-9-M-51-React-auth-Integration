// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApXD-4ZavejJEHpziVp5X2pwTLoD9fv8M",
  authDomain: "m-51-react-auth-integrat-ccd3d.firebaseapp.com",
  projectId: "m-51-react-auth-integrat-ccd3d",
  storageBucket: "m-51-react-auth-integrat-ccd3d.appspot.com",
  messagingSenderId: "60909985777",
  appId: "1:60909985777:web:8ead081c9e67ca45126e50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth

