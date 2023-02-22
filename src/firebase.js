import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCluw0-uoMXYq6DOCrO-EDs5cC76dcKU6M",
    authDomain: "eshop-54d58.firebaseapp.com",
    projectId: "eshop-54d58",
    storageBucket: "eshop-54d58.appspot.com",
    messagingSenderId: "152101680824",
    appId: "1:152101680824:web:9fd8d178316b0a00cee64d",
    measurementId: "G-CKYMTDWZJ6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

export { db, auth };