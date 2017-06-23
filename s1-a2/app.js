/*function myImmediateFunction () {
    var foo = "bar";

    // Outputs: "bar"
    document.getElementById("hi").innerHTML=foo;
}*/
var validateForm = function() {
  var email = document.getElementById('txtEmail');
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
 }
 else{
 	alert("valid");
 }

}