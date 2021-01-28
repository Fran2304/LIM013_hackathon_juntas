import firebase from 'firebase/app';


const googleLogin = () => (
  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
);

export default googleLogin;