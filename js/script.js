// to get login element
var userName   = document.getElementById("nameTxt");
var userEmail  = document.getElementById("emailTxt");
var view_email = document.getElementById("view_email");
var table = document.getElementById("hemmx");
var tbody   = document.getElementById("tbody");
var userpassword   = document.getElementById("passwordTxt");
var email = document.getElementById('email');
var password =document.getElementById('password')
var username =document.getElementById('username')
var phone =document.getElementById('phone')
var submit =document.getElementById('submit')

// view_email.innerHTML ="hi";
// to send data to server and ask server save it in db (post)
var loginBtn = document.getElementById("login");
loginBtn.onclick=()=>{
 console.log( userEmail)
 console.log(userpassword)
  var insertData = {
    "name"  : userName.value,
   "email"  : userEmail.value,
 "password"  : userpassword.value}
  console.log(insertData)
  
fetch("http://localhost:2009/saveData",{
  method  :"Post",
  headers :{"content-type":"application/json"},
  body    :JSON.stringify(insertData)
})};


// var loginBtn1   = document.getElementById("Login");
// loginBtn1.onclick=()=>{
//     var insertData = {
//         "userName" :userName.value,   
//         "userEmail":userEmail.value,
//       }
//       fetch("http://localhost:2010/saveData",{
//         method :"POST",
//         headers :{"content-type":"application/json"},
//         body   :JSON.stringify(insertData)
//       })
// }
// 

////deleteBtn ==> 
//send data to server and ask server to delete data(delete)
var deleteBtn    = document.getElementById("delete");
deleteBtn.onclick=()=>{
    var deleteData = {
      "name" :userName.value
    }
    fetch("http://localhost:2009/deleteData",{
      method :"DELETE",
      headers :{"content-type":"application/json"},
      body   :JSON.stringify(deleteData)
    })
  }
// updateBtn ==> 
//send data to server and ask server to update data(put)  
var updateBtn    = document.getElementById("update");
updateBtn.onclick=()=>{
  
    var updateData = {
      "name" :userName.value,   
      "email":userEmail.value,
      "password":userpassword.value,

  }
  fetch("http://localhost:2009/updateData",{
  method :"PUT",
  headers :{"content-type":"application/json"},
  body   :JSON.stringify(updateData)
})
}
//view btn ==> to get data from server
 //var viewBtn = document.getElementById("view");
   function getdata(data)
   {
     console.log(data);
     table.style.display="block";
      view_email.innerHTML = data.result[0].userName + " "+data.result[0].userEmail;
     var row = table.insertRow(1);
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(0);
     cell1.innerHTML = data.result[0].userName;
     cell2.innerHTML = data.result[0].userEmail;
     cell3.innerHTML = data.result[0].userpassword;
   }

fetch('http://localhost:2009/getdata')
.then((data)=>{return data.json()})
.then((data)=>{
for(var i=0; i<data.length;i++) {
  tbody.innerHTML +=`
  <tr> 
    <td>${data[i].name}</td>
    <td>${data[i].email}</td>
    <td>${data[i].password}</td>
  </tr>
  `
}

})

          
