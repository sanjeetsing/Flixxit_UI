
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBL3tnQXzZY7Rz8swvb54RTlEUOgNA_cIs",
  authDomain: "Flixxit-f33e3.firebaseapp.com",
  projectId: "Flixxit-f33e3",
  storageBucket: "Flixxit-f33e3.appspot.com",
  messagingSenderId: "25593460233",
  appId: "1:25593460233:web:efe313854d1eec7d53ead8",
  measurementId: "G-7NB0L2SHJS"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);