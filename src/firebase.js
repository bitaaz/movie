import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAebrhBJWgDeCIgzI7MJRx7PnyaiXs0HEY",
  authDomain: "auth-development-70d8b.firebaseapp.com",
  databaseURL: "https://auth-development-70d8b-default-rtdb.firebaseio.com",
  projectId: "auth-development-70d8b",
  storageBucket: "auth-development-70d8b.appspot.com",
  messagingSenderId: "1085609477565",
  appId: "1:1085609477565:web:62eca9a6710a68a6383ed4",
});

export const auth = app.auth();
export default app;
