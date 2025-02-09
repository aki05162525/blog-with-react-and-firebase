import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx2XluRh98NvwyzMSO4szmKDVqQhoUYGc",
  authDomain: "blog-fdf27.firebaseapp.com",
  projectId: "blog-fdf27",
  storageBucket: "blog-fdf27.firebasestorage.app",
  messagingSenderId: "50813115026",
  appId: "1:50813115026:web:81f64b71bb583e2046e44b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export(auth,provider,db)