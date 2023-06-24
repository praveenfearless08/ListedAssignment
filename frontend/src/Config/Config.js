import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqqVCw0MbV1LWAjUgrz5bS5fa-iOFeZJw",
  authDomain: "dashboard-ad025.firebaseapp.com",
  projectId: "dashboard-ad025",
  storageBucket: "dashboard-ad025.appspot.com",
  messagingSenderId: "251975896952",
  appId: "1:251975896952:web:444d0bdc0283541991428d",
  measurementId: "G-B814CF0W2K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
