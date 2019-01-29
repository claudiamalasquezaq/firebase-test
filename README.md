# Implementando firebase a un proyecto

## Autenticación con Google

Toda la documentación se encuentra aquí: [Documentación de Firebase](https://firebase.google.com/docs/auth/web/google-signin?hl=es-419).

Un vídeo que me sirvió también está [aquí](https://www.youtube.com/watch?v=uRaeF7qtBXs).

Para empezar, debes agregar a tu proyecto firebase, agregando las siguientes líneas en HTML, justo antes de cerrar el body.

`<script src="https://www.gstatic.com/firebasejs/5.8.1/firebase.js"></script>`

Para usar la autentificación, debemos agregar también las siguientes líneas:

`<script src="https://www.gstatic.com/firebasejs/5.5.2/firebase-app.js"></script>`

`<script src="https://www.gstatic.com/firebasejs/5.5.2/firebase-auth.js"></script>`

Luego, crear un proyecto en la consola de Firebase, en la parte superior derecha, hay un botón **Configuración Web** que al hacerle clic, te dará un código como este:

`const config = {
    apiKey: "AIzaSyA2z-mqmMBhZ5CMakXhAQ0aub9rexBUqxw",
    authDomain: "projecttest-437e3.firebaseapp.com",
    databaseURL: "https://projecttest-437e3.firebaseio.com",
    projectId: "projecttest-437e3",
    storageBucket: "projecttest-437e3.appspot.com",
    messagingSenderId: "293468254995"   
};`

`firebase.initializeApp(config);`

Este código es único para cada proyecto.

Lo que hice para tenerlo más ordenado, fue crear un archivo `config.js` donde guardé la variable config para separarla de las demás constantes.

En el archivo `app.js` inicializo el firebase.

Además llamaré al botón para ingresar con Google con el DOM y le agregaré el evento clic, dentro de él, haré el llamado de la función de firebase `auth().signInWithPopup`, así como se muestra a continuación.

`btnGoogle.addEventListener('click', () => {
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
});`

Luego de agregar esto, se mostrará un error de dominio no permitido, así que se debe ir a la console de firebase para agregar el dominio que deseamos que se vea.

En mi caso, le agregué mi dominio de gh-pages.

Y listo, al hacer clic en el botón _Autentificación con Google_, se abrirá otra ventana donde se autentificará con alguna cuenta de Google y luego, se mostrará un mensaje de bienvenida con el nombre que tiene esta persona en su cuenta.

