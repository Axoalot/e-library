// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCul0O9Bhsx2hPnuYHGxjwWdLsYIcRW1q0",
  authDomain: "e-library-c1a25.firebaseapp.com",
  projectId: "e-library-c1a25",
  storageBucket: "e-library-c1a25.appspot.com",
  messagingSenderId: "840851719178",
  appId: "1:840851719178:web:8697f0fb77a88c75674bf3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()