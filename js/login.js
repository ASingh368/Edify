const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const signUp = document.getElementById("signUpBtn");
const signIn = document.getElementById("signInBtn");
const container = document.getElementById("container");
const forgotPassword = document.getElementById("forgotPassword");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
  container.classList.add("right-panel-active .sign-in-container");
});

//sign-up for new users
//email & password are stored in user-database
function signupUser() {
  //   e.preventDefault();
  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      window.location = "/activities.html";
      container.classList.remove("right-panel-active");
      container.classList.add("right-panel-active .sign-in-container");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  //console output to see if user cred. are successfully captured
  console.log(email, password);
}

//sign-in for existing users
function signinUser() {
  const signInEmail = document.getElementById("signInEmail").value;
  const signInPassword = document.getElementById("signInPassword").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(signInEmail, signInPassword)
    .then((userCredential) => {
      // Signed in

      var user = userCredential.user;
      window.location = "/activities.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

forgotPassword.addEventListener("click", (e) => {
  const signInEmail = document.getElementById("signInEmail");

  firebase
    .auth()
    .sendPasswordResentEmail(signInEmail)
    .then(() => {
      console.log("password reset email sent");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
});
