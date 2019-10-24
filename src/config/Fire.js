import firebase from "firebase";

const config = {
  apiKey: "AIzaSyB7gFMLyb7NTDd5gqMQBQMrt1ucW2Bpv8Q",
  authDomain: "manager-aebd9.firebaseapp.com",
  databaseURL: "https://manager-aebd9.firebaseio.com",
  projectId: "manager-aebd9",
  storageBucket: "manager-aebd9.appspot.com",
  messagingSenderId: "179672494559",
  appId: "1:179672494559:web:6d8566f119d7c26252946a"
};

const fire = firebase.initializeApp(config);

export default fire;
