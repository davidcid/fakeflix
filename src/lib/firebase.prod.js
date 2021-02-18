import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBgCBYPdry6wHa5loiEGHa_eJlQhjS07O8",
  authDomain: "fakeflix-db763.firebaseapp.com",
  projectId: "fakeflix-db763",
  storageBucket: "fakeflix-db763.appspot.com",
  messagingSenderId: "375927537980",
  appId: "1:375927537980:web:88e04539eade6316be9e39",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
