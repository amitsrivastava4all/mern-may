


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBIEpSU-RfOmAvDHXkUym9zSg_O43XeEBw",
    authDomain: "jswithfirebase-f7ed5.firebaseapp.com",
    databaseURL: "https://jswithfirebase-f7ed5.firebaseio.com",
    projectId: "jswithfirebase-f7ed5",
    storageBucket: "jswithfirebase-f7ed5.appspot.com",
    messagingSenderId: "804033451259",
    appId: "1:804033451259:web:939dc1dbb64294be3d8c5e",
    measurementId: "G-RC181NHBWN"
  };
  // Initialize Firebase
  var db = firebase.initializeApp(firebaseConfig);
  console.log("DB is ",db);
  const fs = db.firestore();

  //firebase.analytics();
