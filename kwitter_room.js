
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
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
   
     user_name = localStorage.getItem("user_name");
     room_name  = localStorage.getItem("room_name");


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id ="+Room_names+" onclick = 'redirectToRoomName (this.id)' ># "+ Room_names + "</div>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

document.getElementById("user_name").innerHTML = "Welcome " +user_name +" !";

function addRoom(){

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}



function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="index.html";
}

function redirectToRoomName (name)
{

 console.log (name);
 localStorage.setItem("room_name", name);
 window.location  = "kwitter_page.html";

}