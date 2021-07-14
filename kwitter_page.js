//YOUR FIREBASE LINKS
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyDDJLH0xZ4L36My4mGouiwLpRInldQkcbM",
      authDomain: "kwitter-544ec.firebaseapp.com",
      databaseURL: "https://kwitter-544ec-default-rtdb.firebaseio.com",
      projectId: "kwitter-544ec",
      storageBucket: "kwitter-544ec.appspot.com",
      messagingSenderId: "81078051268",
      appId: "1:81078051268:web:d4bc6ad44c6fbb64d20491"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username");
    roomname=localStorage.getItem("AddRoomName");

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         
//Start code

//End code
      } });  }); }
getData();
function logout()
{
      window.location="index.html";
}

function send()
{
      message=document.getElementById("input").value;
      firebase.database().ref(roomname).push(
            {
                  name:username,
                  message:message,
                  like:0
            }
      );document.getElementById("input").value=" ";
}
