const firebaseConfig = {
    apiKey: "AIzaSyBOjmJ6_FcFo3EBfzSc_qYFe_4KEcxYgQw",
    authDomain: "signuppage-af213.firebaseapp.com",
    projectId: "signuppage-af213",
    storageBucket: "signuppage-af213.appspot.com",
    messagingSenderId: "936972250240",
    appId: "1:936972250240:web:7b8fcf027ea6d1d3aaca65",
    measurementId: "G-1X0Q2L23E0"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// let's code 
var datab = firebase.database().ref('data');
function UserRegister() {
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {

    }).catch(function (error) {
        var errorcode = error.code;
        var errormsg = error.message;
    });

}
const auth = firebase.auth();
function SignIn() {
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => alert(e.msg));
    window.open("https://www.google.com", "_self");


}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email: getId('eemail'),
        password: getId('lpassword')
    });

    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function getId(id) {
    return document.getElementById(id).value;
}
