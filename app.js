firebase.initializeApp(config);

btnGoogle = document.getElementById('btn-google');
message = document.getElementById('message');

btnGoogle.addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const user = result.user.displayName;
      message.innerHTML = 'Bienvenido' + user;
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    })
});


