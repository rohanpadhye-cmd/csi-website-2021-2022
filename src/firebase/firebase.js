import firebase from 'firebase/app';
import 'firebase/firestore';
// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyCPyOoHlBTpJriu8EqXImwEALpOlJSLTNg",
    authDomain: "csi-website-2020-2021.firebaseapp.com",
    projectId: "csi-website-2020-2021",
    storageBucket: "csi-website-2020-2021.appspot.com",
    messagingSenderId: "720109672193",
    appId: "1:720109672193:web:dccd52254c3b92a1cbed00"
  };
  
  firebase.initializeApp(config);
  var db = firebase.firestore();
    
  export default db;