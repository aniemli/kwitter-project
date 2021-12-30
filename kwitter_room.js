var firebaseConfig = {
    apiKey: "AIzaSyCRuWlWa7V6HXSclL68iNhC48N0HwJ5zto",
    authDomain: "kwitter-2-za.firebaseapp.com",
    databaseURL: "https://kwitter-2-za-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-za",
    storageBucket: "kwitter-2-za.appspot.com",
    messagingSenderId: "719809488902",
    appId: "1:719809488902:web:382571df56c853be1a7b87"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig); 
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+"  "+ user_name+ "!";

function addRoom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose:"adding room"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
    
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room name -"+Room_names);
    row="<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();

function redirectToRoomName() {
     console.log(name);
     localStorage.setItem("room_name",name);
     window.location="kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";
}