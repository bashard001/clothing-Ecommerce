import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";


const config = {
    apiKey: "AIzaSyARMYSoUvL5x20b8di0EtysrFOvkPwms5c",
    authDomain: "clothing-ecommerce-843a2.firebaseapp.com",
    projectId: "clothing-ecommerce-843a2",
    storageBucket: "clothing-ecommerce-843a2.appspot.com",
    messagingSenderId: "307966816922",
    appId: "1:307966816922:web:2ba327ccfaa24c5550a523",
    measurementId: "G-8KCMT3LVV4"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;