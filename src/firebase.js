import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyDmcXuoA4pWQpvbgbmd3OJY4RKdTkqHEv8",
    authDomain: "rueiro-9fe97.firebaseapp.com",
    databaseURL: "https://rueiro-9fe97.firebaseio.com",
    projectId: "rueiro-9fe97",
    storageBucket: "rueiro-9fe97.appspot.com",
    messagingSenderId: "592408708075"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
//   firebaseDB.ref('matches').once('value').then((snapshot)=>{
//       console.log(snapshot.val())
//   })

  const firebaseMatches = firebaseDB.ref('matches');
export {
    firebase,
    firebaseMatches
}