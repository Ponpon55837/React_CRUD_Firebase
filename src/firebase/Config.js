import * as firebase from 'firebase/app'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyAYxBKTuy9fUOz3lGMExaUfVYEoPREDANs",
    authDomain: "react-crud-fcfb1.firebaseapp.com",
    databaseURL: "https://react-crud-fcfb1.firebaseio.com",
    projectId: "react-crud-fcfb1",
    storageBucket: "react-crud-fcfb1.appspot.com",
    messagingSenderId: "206599953779",
    appId: "1:206599953779:web:8eeba1c73e061611bb7906",
    measurementId: "G-XJKY6R01YT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const projectDB = firebase.database().ref()
