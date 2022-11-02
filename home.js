$(document).ready(function () {
    $("#about").hide();
    $("#contact").hide();
    $("#movie").hide();
    $("#shows").hide();
    $("#horror").hide();
    $("#family").hide();
    $("#comedy").hide();
    $("#theatre").hide();

    $("#showabout").click(function () {
      $("#home").hide();
      $("#about").show();
      $("#contact").hide()
      $("#movie").hide()
      $("#theatre").hide();

    });
    $("#showmovies").click(function () {
      $("#movie").show();
      $("#about").hide();
      $("#contact").hide();

      $("#home").hide();
      $("#theatre").hide();
    });
  $("#showcontact").click(function () {
    $("#contact").show();
    $("#about").hide();
    $("#movie").hide();
    $("#home").hide();
    $("#theatre").hide();
  });
  $("#showhorror").click(function () {
    $("#horror").show();
    $("#comedy").hide();
    $("#family").hide(); 
  });
  $("#showfamily").click(function () {
    $("#horror").hide();
    $("#comedy").hide();
    $("#family").show(); 
  });
  $("#showcomedy").click(function () {
    $("#horror").hide();
    $("#comedy").show();
    $("#family").hide(); 
  });
  $("#showtheatre").click(function () {
    $("#theatre").show();
    $("#about").hide();
    $("#movie").hide();
    $("#contact").hide(); 
    $("#home").hide();
  });

        $("#quantity").focusin(function(){
          $(this).css("background-color","rgb(136, 233, 233)");
          });
          $("#quantity").focusout(function(){
          $(this).css("background-color","lightblue");
          });
      
  });
  function myfunc(){
    window.alert("Your order is placed HAPPY SHOPPING!!");
  }
  function calculate() {
    var quantity= document.getElementById('quantity').value; 
    var cost = document.getElementById('cost').value;
    var myResult = quantity * cost;
    document.getElementById('result').value = myResult;

}
function validpassword(){
  var pw=document.getElementById("password").value;
  if(pw==""){
     document.getElementById("message").innerHTML=" Fill the password please!!";
      return false;
  }
  if(pw.length<8){
      document.getElementById("message").innerHTML=" Password length should be atleast 8 letters";
      return false;
  }
  if(pw.length>15){
      document.getElementById("message").innerHTML=" Password length should not exceeds 15 letters";
      return false;
  }
  else{
      alert("password is valid");   
  }
 
}


  