import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOulXOBo-Y5IRgtuQH_5z89Kj4n_OjsA8",
  authDomain: "aproject-edf6a.firebaseapp.com",
  projectId: "aproject-edf6a",
  storageBucket: "aproject-edf6a.appspot.com",
  messagingSenderId: "224148427349",
  appId: "1:224148427349:web:1bf00d8711911d9a673adc",
  measurementId: "G-HRMWNZCE1J",
};

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig);
// Firebaseを読みこみ、dbとしてexport
export const db = getFirestore(app);
