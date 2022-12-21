var firebaseConfig = {
      apiKey: "AIzaSyBOSZqW2QL25V070JFhiBA9x9EatR7oZXo",
      authDomain: "class93-9f902.firebaseapp.com",
      databaseURL: "https://class93-9f902-default-rtdb.firebaseio.com",
      projectId: "class93-9f902",
      storageBucket: "class93-9f902.appspot.com",
      messagingSenderId: "455495508971",
      appId: "1:455495508971:web:5525e8f5be8da969c4afae"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE


user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function addRoom() {
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); 
      localStorage.setItem("room_name", room_name); 
      window.location = "kwitter_page.html";
      }



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
   console.log("Room Name - " + Room_names);
   row="<div class= 'room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)' >#" +Room_names +"</div> <hr>";
document.getElementById("outpute").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html"
      
}