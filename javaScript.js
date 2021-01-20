

function changebackground(x) {
  x.style.background = "lightyellow";
}

function revertbackground(x) {
  x.style.background = "white";
}

// account popup -->
function openForm() {
  document.getElementById("myForm").style.display = "flex";
}
// login popup -->
function openForm0l() {
<!-- if username is empty, display error massage -->
if(document.getElementById("user").value=="")
{document.getElementById("msg0l").innerHTML = "PLEASE ENTER YOUR USERNAME !!";
document.getElementById("myForm0l").style.display = "flex";
return false;
}
// if password is empty, display error massage -->
else if(document.getElementById("pass").value=="")
{document.getElementById("msg0l").innerHTML = "PLEASE ENTER YOUR PASSWORD !!";
document.getElementById("myForm0l").style.display = "flex";
return false;}
else 
// if username and password are valid, display welcome back massage -->
{document.getElementById("msg0l").innerHTML = "WELCOME BACK !!";
document.getElementById("myForm0l").style.display = "flex";
return true;}}
// signup popup -->
function openForm0s() {
// if username is empty, display error massage -->
if(document.getElementById("user1").value=="")
{document.getElementById("msg0s").innerHTML = "PLEASE ENTER THE USERNAME !!";
document.getElementById("myForm0s").style.display = "flex";
return false;}
else if(document.getElementById("pass1").value=="")
// if password is empty, display error massage -->
{document.getElementById("msg0s").innerHTML = "PLEASE ENTER THE PASSWORD !!";
document.getElementById("myForm0s").style.display = "flex";
return false;}
else if(document.getElementById("pass2").value=="")
// if repeated password is empty, display error massage -->
{document.getElementById("msg0s").innerHTML = "PLEASE REPEAT THE PASSWORD !!";
document.getElementById("myForm0s").style.display = "flex";
return false;}
// if passowrds doses not match, display error massage -->
else if(document.getElementById("pass1").value!=document.getElementById("pass2").value)
{document.getElementById("msg0s").innerHTML = "PASSWORDS ARE NOT MATCHING!!";
document.getElementById("myForm0s").style.display = "flex";
return false;}
else if(document.getElementById("pass3").value=="")
// if email is empty, display error massage -->
{document.getElementById("msg0s").innerHTML = "PLEASE ENTER THE EMAIL !!";
document.getElementById("myForm0s").style.display = "flex";
return false;}
// if entred invalid email, display error massage -->
else if (/^(([^()\[\]\\.,;:\s@"]+(\.[^()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("pass3").value)==false)
{document.getElementById("msg0s").innerHTML = "PLEASE ENTER VALID EMAIL !!";
document.getElementById("myForm0s").style.display = "flex";
return false;}
else 
// if username, passwords and email are valid, display welcome massage -->
{document.getElementById("msg0s").innerHTML = "WELCOME";
document.getElementById("myForm0s").style.display = "flex";
return true;}}

// menu cart popup -->
function openForm1() {
  document.getElementById("myForm1").style.display = "flex";
}
// subscribe popup 
function openForm2() {
// if email is empty, display error massage -->
if(document.getElementById("subemail").value=="")
document.getElementById("msg2").innerHTML = "PLEASE ENTER YOUR EMAIL !!";
// if email is invalid, display error massage 
else if (/^(([^()\[\]\\.,;:\s@"]+(\.[^()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("subemail").value)==false)
document.getElementById("msg2").innerHTML = "PLEASE ENTER VALID EMAIL !!";
else
// if valid email, display SUBSCRIBED SUCCESSFULY massage 
document.getElementById("msg2").innerHTML = "SUBSCRIBED SUCCESSFULY !!";
  document.getElementById("myForm2").style.display = "flex";
}
// books cart popup -->
function openForm3() {
  document.getElementById("myForm3").style.display = "flex";
}
//  submit popup -->
function openForm3() {
var num = /[0-9]/
// if name is empty, display error massage -->
if(document.getElementById("name").value=="")
{document.getElementById("msg3").innerHTML ="PLEASE ENTER YOUR NAME !!";
document.getElementById("myForm3").style.display = "flex";
return false;}
// if email is empty, display error massage -->
else if(document.getElementById("email").value=="")
{document.getElementById("msg3").innerHTML = "PLEASE ENTER YOUR EMAIL !!";
document.getElementById("myForm3").style.display = "flex";
return false;}
// if entred invalid email, display error massage -->
else if (/^(([^()\[\]\\.,;:\s@"]+(\.[^()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("email").value)==false)
{document.getElementById("msg3").innerHTML = "PLEASE ENTER VALID EMAIL !!";
document.getElementById("myForm3").style.display = "flex";
return false;}
// if subject is empty, display error massage -->
else if(document.getElementById("subject").value=="")
{document.getElementById("msg3").innerHTML = "PLEASE ENTER THE SUBJECT !!";
document.getElementById("myForm3").style.display = "flex";
return false;}
// if user choose Order Issue type and does not enter Order Number, display error massage -->
else if(document.getElementById("Type").value=="OrderIssue"&&document.getElementById("ordernumber").value=="")
{document.getElementById("msg3").innerHTML = "PLEASE ENTER THE ORDER NUMBER !!";
document.getElementById("myForm3").style.display = "flex";
return false;}
// if user choose Order Issue type and an invalid Order Number was entred, display error massage -->
else if(document.getElementById("Type").value=="OrderIssue"&&(document.getElementById("ordernumber").value.match(num)!=true ||document.getElementById("ordernumber").value.length!=10))
{document.getElementById("msg3").innerHTML = "PLEASE ENTER VALID ORDER NUMBER !!";
document.getElementById("myForm3").style.display = "flex";
return false;}
// if description is empty, display error massage -->
else if(document.getElementById("description").value=="")
{document.getElementById("msg3").innerHTML = "PLEASE ENTER THE DESCRIPTION !!";
document.getElementById("myForm3").style.display = "flex";
return false;}
else
// if all fiels value are valid, display THANK YOU massage -->
{document.getElementById("msg3").innerHTML = "THANK YOU!!";
document.getElementById("myForm3").style.display = "flex";
return true}
}

function openForm4() {
  document.getElementById("myForm4").style.display = "flex";
}
// close account popup -->
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
// close login popup -->
function closeForm0l() {
  document.getElementById("myForm0l").style.display = "none";
}
// close signup popup -->
function closeForm0s() {
  document.getElementById("myForm0s").style.display = "none";
}
// close menu cart popup -->
function closeForm1() {
  document.getElementById("myForm1").style.display = "none";
}
// close subscribe popup -->
function closeForm2() {
  document.getElementById("myForm2").style.display = "none";
}
// close books cart popup -->
function closeForm3() {
  document.getElementById("myForm3").style.display = "none";
}
// close submit popup -->
function closeForm4() {
  document.getElementById("myForm4").style.display = "none";
}
