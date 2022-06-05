//YOUR FIREBASE LINKS

var  firebaseConfig = {
      apiKey: "AIzaSyBJi77iuwCoV_C2g1xi96R3FZn72VJ9u6w",
      authDomain: "project-93-a7fad.firebaseapp.com",
      databaseURL: "https://project-93-a7fad-default-rtdb.firebaseio.com",
      projectId: "project-93-a7fad",
      storageBucket: "project-93-a7fad.appspot.com",
      messagingSenderId: "941772782415",
      appId: "1:941772782415:web:8df9c16f6847d23d96233a"
    };
    
   
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name_1 = message_data ['name'];
message = message_data ['message'];
like = message_data ['like'];

name_with_tag = "<h4>" + name_1 +"<img class= 'user_tick' src= 'checked.png' ></h4>";
message_with_tag = "<h4 class = 'message_h4'>"+ message + "</h4>";
like_button = "<button class = 'btn btn-warning' id="+firebase_message_id+" value = "+like+" onclick = 'updateLike(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like: " + like +"</span> </button> <hr>";

row = name_with_tag + message_with_tag + like_button +span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();



function logout(){

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";

}

function send(){

msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({

like:0,
message:msg,
name:user_name



});

document.getElementById("msg").value = " ";

}

function updateLike(message_id)
{

      console.log(message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) +1;

      firebase.database().ref(room_name).child(message_id).update({

        like : updated_likes    

      });



}