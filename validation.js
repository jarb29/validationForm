var myForm = document.getElementById("myform");


myForm.addEventListener("submit",(e) => {
  if (validateForm()===false){e.preventDefault();}

 });



function validateForm(){
  var x  = document.getElementById("exampleInputEmail1").value;
  var b = document.getElementById("exampleInputPassword1").value;
  var c = document.getElementById("exampleCheck1").value;

  if (x == "") {
    alert("Email must be filled out");
    return false;

  }
  else if (b == "") {
    alert("Password must be filled out");
    return false;

  }
  else if (!c.checked) {
    alert("you must click on Check me out");
    return false;

  }
};
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
