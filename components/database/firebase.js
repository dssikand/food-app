import {firebase} from '@react-native-firebase/auth';
export const firebaseConfig = {
  apiKey: 'AIzaSyDTvIkTDsBHpwmmoZXZyuG2jAGHozUNO8g',
  authDomain: 'mumy-stiffin.firebaseapp.com',
  databaseURL: 'https://mumy-stiffin.firebaseio.com',
  projectId: 'mumy-stiffin',
  storageBucket: 'mumy-stiffin.appspot.com',
  messagingSenderId: '138804484199',
  appId: '1:138804484199:android:b67ea432401ec6a6e7dcc2',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
