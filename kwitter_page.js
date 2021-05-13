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


user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
       console.log(message_data);
       name = message_data['name'];
       message = message_data['message'];
       like = message_data['like'];
       name_with_tag = "<h4> " + name +"<img class='user_tick' src=tick.png></h4>";
       message_with_tag = "<h4 class='message-h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
       span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

       row = name_with_tag + message_with_tag + like_button + span_with_tag;
       document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();

function updateLike(message_id)
{
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);
    console.log("engine2.30.v data-engine_1.3v process_saved=true data_saved powered_by- https://www.whitehatjr.com/")


    firebase.database().ref(room_name).child(message_id).update({
          like : updated_likes
    });
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";
}

function back()
{
    window.location = "kwitter_room.html";
}




var mybutton = document.getElementById("lllt1");

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