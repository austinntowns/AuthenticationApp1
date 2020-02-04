import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAzcNjSOme45dUWqe-eV0aZw2dgdQCdXHQ",
  authDomain: "authentication1-6be4d.firebaseapp.com",
  databaseURL: "https://authentication1-6be4d.firebaseio.com",
  projectId: "authentication1-6be4d",
  storageBucket: "authentication1-6be4d.appspot.com",
  messagingSenderId: "727755503950",
  appId: "1:727755503950:web:9370ae0a73e1e4bf79c61f",
  measurementId: "G-6YG3GRCGMR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
