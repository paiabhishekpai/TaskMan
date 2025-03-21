// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskman-9280f.firebaseapp.com",
  projectId: "taskman-9280f",
  storageBucket: "taskman-9280f.firebasestorage.app",
  messagingSenderId: "459665186475",
  appId: "1:459665186475:web:5c508d29768af7a8f621ee",
  measurementId: "G-VBF6DHNFBT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);