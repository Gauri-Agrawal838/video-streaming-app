// import firebase from 'firebase/compat/app';
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAismaZYPY62RI96aguRYQ0MWwyX9KPXVc",
  authDomain: "video-streaming-app2.firebaseapp.com",
  projectId: "video-streaming-app2",
  storageBucket: "video-streaming-app2.appspot.com",
  messagingSenderId: "299713106635",
  appId: "1:299713106635:web:d5d3fb6d302c4fd8c4c14e"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBoSWvmaoBISBSDZ41RLvywcqCteHkcyUw",
//   authDomain: "playstream-eb80a.firebaseapp.com",
//   projectId: "playstream-eb80a",
//   storageBucket: "playstream-eb80a.appspot.com",
//   messagingSenderId: "144407371424",
//   appId: "1:144407371424:web:f52eca59df8659501173c5"
// };

firebase.initializeApp(firebaseConfig)

export default firebase.auth()