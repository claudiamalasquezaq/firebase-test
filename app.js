var config = {
  apiKey: "AIzaSyA2z-mqmMBhZ5CMakXhAQ0aub9rexBUqxw",
  authDomain: "projecttest-437e3.firebaseapp.com",
  databaseURL: "https://projecttest-437e3.firebaseio.com",
  projectId: "projecttest-437e3",
  storageBucket: "projecttest-437e3.appspot.com",
  messagingSenderId: "293468254995"
};
firebase.initializeApp(config);

btnGoogle = document.getElementById('btn-google');

const authentication = (provider) => {
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const token = result.credential.accessToken;
      const user = result.user;
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      const email = error.email;
      console.log(email);
      const credential = error.credential;
      console.log(credential);
    })
}

const authGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
};


btnGoogle.addEventListener('click', () => {
  authGoogle();
  // const provider = new firebase.auth.GoogleAuthProvider();
  // firebase.auth().signInWithPopup(provider)
  // .then(result =>{
  //   const user = result.user.displayName;
  //   message.innerHTML = "Bienvenido" + user;  
  // })
  // .catch(error => {
  //   console.log(error);
  // })
});


