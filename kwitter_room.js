// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAfNhAJLfweNaWu-nmvY7ACXdVfEku8XSY",
    authDomain: "letschat-60a8e.firebaseapp.com",
    databaseURL: "https://letschat-60a8e-default-rtdb.firebaseio.com",
    projectId: "letschat-60a8e",
    storageBucket: "letschat-60a8e.appspot.com",
    messagingSenderId: "15748972896",
    appId: "1:15748972896:web:34780b11319e533381de05"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var userName = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "welcome "+ userName+"!";

function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    //End code
    document.getElementById("output").innerHTML+=row;
    });});}
getData();

function redirectToRoomName(name){
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";
}


var mybutton = document.getElementById("lllt");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}