// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy00w0oDyQg6JdEwxrhpPseoChrO_ncAk",
  authDomain: "keystore-3158f.firebaseapp.com",
  projectId: "keystore-3158f",
  storageBucket: "keystore-3158f.appspot.com",
  messagingSenderId: "372996200834",
  appId: "1:372996200834:web:ce9647915a93339302979b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
  return app;
};
