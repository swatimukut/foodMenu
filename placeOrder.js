
const firebaseConfig = {
    apiKey: "AIzaSyCLYLtWnXTjuCrV9HZb5bvInF2YLdDR5L8",
    authDomain: "foodmenu-81030.firebaseapp.com",
    databaseURL: "https://foodmenu-81030-default-rtdb.firebaseio.com",
    projectId: "foodmenu-81030",
    storageBucket: "foodmenu-81030.appspot.com",
    messagingSenderId: "1094305222400",
    appId: "1:1094305222400:web:a13d25a0cf464a4c9f6de5"
  };

user_name= localStorage.getItem("uname");
document.getElementById("uname").innerHTML="Hello "+user_name +"!"


//To store login details of user in local repository and to create a field in db
function userDetails(){
    userName=document.getElementById("uname").value;
    phNumber=document.getElementById("phoneNumber").value;
   
    localStorage.setItem("uname",userName);
    localStorage.setItem("phoneNumber",phNumber);
    addUser();
    window.location="index.html";

    
}

function addUser(){

    ph=localStorage.getItem("phoneNumber");
    console.log(ph)
    app.database().ref("/").child(ph).update({
        phoneNumber:ph
    })
    console.log(ph)
   
}


function logout(){

}