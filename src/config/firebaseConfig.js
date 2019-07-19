import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyDmyBJRsB8Dz0bAD5_LdqkSZQWEaAmI4qo",
authDomain: "react-project-29153.firebaseapp.com",
databaseURL: "https://react-project-29153.firebaseio.com",
projectId: "react-project-29153",
storageBucket: "",
messagingSenderId: "450290476751",
appId: "1:450290476751:web:6f30bc4b01e9e7d9"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 