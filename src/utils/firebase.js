// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getAnalytics } from "@firebase/analytics";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwphJCgmTHPMpUHCvdstlr8SigX2GpMOw",
  authDomain: "netflix-gpt-6a37a.firebaseapp.com",
  projectId: "netflix-gpt-6a37a",
  storageBucket: "netflix-gpt-6a37a.appspot.com",
  messagingSenderId: "798717582208",
  appId: "1:798717582208:web:476d1be568a3649213bf65",
  measurementId: "G-GDX0JVZJ80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();