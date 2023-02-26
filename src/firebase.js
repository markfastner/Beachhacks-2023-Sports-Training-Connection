import { getApps, initializeApp } from "firebase/app";
if (getApps().length === 0) {
  initializeApp({
    apiKey: "AIzaSyBUMPg6TE4qgdTrNo4bqwnZDzS1RABAu4I",
    authDomain: "beach-hacks-761ec.firebaseapp.com",
    projectId: "beach-hacks-761ec",
    storageBucket: "beach-hacks-761ec.appspot.com",
    messagingSenderId: "479422071894",
    appId: "1:479422071894:web:b561681c1b81ca6dbea7f7",
    measurementId: "G-X2MSLZJ4L4",
  });
}
