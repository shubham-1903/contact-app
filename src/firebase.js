import firebase from "firebase";
var firebaseApp = firebase.initializeApp({
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
});
// var firebaseApp = firebase.initializeApp({
// 	apiKey: "AIzaSyDmns7jm6TuD5iGL5jhZB5MPjDJnNZ0UH4",
// 	authDomain: "form-d7336.firebaseapp.com",
// 	projectId: "form-d7336",
// 	storageBucket: "form-d7336.appspot.com",
// 	messagingSenderId: "612515770857",
// 	appId: "1:612515770857:web:9abf3e7e0b6d54afdfdb78",
// });
var db = firebaseApp.firestore();
export { db };
