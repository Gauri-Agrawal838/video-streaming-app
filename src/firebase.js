// import firebase from 'firebase/compat/app';
import firebase from 'firebase/app';
// import 'firebase/compat/auth'
// import 'firebase/compat/firestore'

import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAismaZYPY62RI96aguRYQ0MWwyX9KPXVc",
  authDomain: "video-streaming-app2.firebaseapp.com",
  projectId: "video-streaming-app2",
  storageBucket: "video-streaming-app2.appspot.com",
  messagingSenderId: "299713106635",
  appId: "1:299713106635:web:d5d3fb6d302c4fd8c4c14e"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()