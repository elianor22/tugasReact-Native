import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAkUCSYUlyxrrW08HGn3p05ufy9DMXGfm0',
  authDomain: 'laporangan-f5e94.firebaseapp.com',
  databaseURL: 'https://laporangan-f5e94-default-rtdb.firebaseio.com',
  projectId: 'laporangan-f5e94',
  storageBucket: 'laporangan-f5e94.appspot.com',
  messagingSenderId: '498479883541',
  appId: '1:498479883541:android:f84e0ea96f18e75cf7b51c',
  measurementId: 'G-WT8EL6WMP1',
};


    firebase.initializeApp(firebaseConfig);
    const db = app.firestore();


export { db };