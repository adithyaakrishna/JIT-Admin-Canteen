import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBzh1Q31buPcqTuie6WNLyFmzrumVRjn_M",
    authDomain: "web-project-021428.firebaseapp.com",
    projectId: "web-project-021428",
    storageBucket: "web-project-021428.appspot.com",
    messagingSenderId: "90166502692",
    appId: "1:90166502692:web:89be3dfc535e0efa8c3fb1",
    measurementId: "G-F76CCEVDHF"
};

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth;

export const firestore = firebase.firestore();

export const storage = firebase.storage();