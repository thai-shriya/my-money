import { firebase } from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBCWhzWHoLZ2dM5l1JVhirRPG4sb6B7CIU",
  authDomain: "my-money-537ee.firebaseapp.com",
  projectId: "my-money-537ee",
  storageBucket: "my-money-537ee.appspot.com",
  messagingSenderId: "171874888866",
  appId: "1:171874888866:web:8deab2a334e894a1993bfb",
  measurementId: "G-XY9CTV4CHE"
};

//init firebase

firebase.initializeApp(firebaseConfig)

//init service

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()



export { projectFirestore , projectAuth}