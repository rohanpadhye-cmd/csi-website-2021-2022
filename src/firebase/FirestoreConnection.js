import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase App only once
if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.REACT_APP_PUBLIC_API_KEY,
        authDomain: process.env.REACT_APP_PUBLIC_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_PUBLIC_PROJECT_ID
    });
} else {
    firebase.app();
}

// Handle for Cloud Firsestore
const db = firebase.firestore();

export default db;