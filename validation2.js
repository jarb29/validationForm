
var myForm = document.getElementById("myform");


myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();


 });



const validateForm = () => {
  var email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  var x  = document.getElementById("exampleInputEmail1").value;
  var b = document.getElementById("exampleInputPassword1").value;
  var c = document.getElementById("exampleCheck1");
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  if (x == "")
  {
    alert("Email must be filled out");
    return false;

  }
  else if (x.match(email)===false) {
    alert("Email must be filled properly");
    return false;


  }
  else if (b == "") {
    alert("Password must be filled out");
    return false;

  }
  else if (!b.match(passw)) {
    alert("Password must be filled properly");
    return false;

  }

  else if (!c.checked) {
    alert("you must click on Check me out");
    return false;

  }
};
