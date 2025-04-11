import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyALcpFDY6eU8yayepBIAxPMXipbjB-D6b4",
  authDomain: "lanchoneteburguer-589d9.firebaseapp.com",
  projectId: "lanchoneteburguer-589d9",
  storageBucket: "lanchoneteburguer-589d9.firebasestorage.app",
  messagingSenderId: "308963886763",
  appId: "1:308963886763:web:6a2d55390094b00a9fd9ee",
  measurementId: "G-EGJTZ78LD5"
};

export const app = firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()