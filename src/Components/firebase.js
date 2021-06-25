import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCyK_QQGSlW7vf6QacsRBHdLnM71JEkJJA",
  authDomain: "dhawaldarjiportfolio.firebaseapp.com",
  projectId: "dhawaldarjiportfolio",
  storageBucket: "dhawaldarjiportfolio.appspot.com",
  messagingSenderId: "411854179960",
  appId: "1:411854179960:web:5f29341a35cd91d499278d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

var db = firebaseApp.firestore();

export { db };
