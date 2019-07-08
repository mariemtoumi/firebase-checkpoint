
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBR1DgS9Q1rB5LR80UHRa6tTPRm5RKcygg",
    authDomain: "a-form.firebaseapp.com",
    databaseURL: "https://a-form.firebaseio.com",
    projectId: "a-form",
    storageBucket: "",
    messagingSenderId: "241168577540",
    appId: "1:241168577540:web:bbd524c627729a70"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('a-form');
  function submitForm(e){
      e.preventDefault();
      var Name = document.getElementById('Name').value;
      var Track = document.getElementById('Track').value;
      var Email = document.getElementById('Email').value;
      var Phone = document.getElementById('Phone').value;
      saveMessage(Name,Track,Email,Phone);
  }


document.getElementById('contactForm').addEventListener('submit', submitForm);

function saveMessage(Name,Track,Email,Phone){
    var newMessageRef=messagesRef.push();
    newMessageRef=messagesRef.push();
    newMessageRef.set({
        Name:Name,
        Track:Track,
        Email:Email,
        Phone:Phone,
    });
}