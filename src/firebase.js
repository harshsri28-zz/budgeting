import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyArtJ7G9M3UqxwcHPN3pPqvfeJnUfGPLqU",
  authDomain: "fir-d16f7.firebaseapp.com",
  projectId: "fir-d16f7",
  storageBucket: "fir-d16f7.appspot.com",
  messagingSenderId: "801807576304",
  appId: "1:801807576304:web:8599e3e6de66f3af022635",
  measurementId: "G-KGKZZFE9FR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
