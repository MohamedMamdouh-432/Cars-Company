function validation(){
  // store the value that user enter in variables
  var user = document.getElementById('fname').value;
  var user2 =  document.getElementById('lname').value;
  var email = document.getElementById('email').value;
  var pass = document.getElementById('password').value;
  var conpass = document.getElementById('conpassword').value;
  var mobile = document.getElementById('phone').value;

  //  First Name and Last Name should be more 3 letters
  if(user.length<3)
  {
     alert("Wrong Input : Invalid Name . First Name must be more than 2 letters");
     return false;
  }
  if(user2.length<3){
   alert("Wrong Input : Invalid Name . Last Name must be more than 2 letters");
   return false;
  }
   if(mobile.length!=11){
   alert("Wrong Input : Invalid Number . Phone Number should be 11 digits only no more no else");
   return false;
  }
  if(pass.search(/[ ]/)!=-1){
    alert("Wrong Input : Invalid Password . Password must not include a space");
  return false;
  }
  // limit the lenght of the  pass
  if(pass.length != 8 ){
   alert("Wrong Input : Invalid Password . Passward must include 8 characters no long no less");
     return false;
  }
   // must enclud numbers
  if(pass.search(/[0-9]/)==-1){
     
     alert("Wrong Input : Invalid Password . Password must incluce at least a number");
     return false;
  }
  // not to accept without lower characters
  if(pass.search(/[a-z]/)==-1)
  {
     alert("Wrong Input : Invalid Password . Password must include at least 1 lower character");
  return false;
  }
  // not accept without special characters
  if(pass.search(/[!\@\#\$\%\^\&\*\(\)\_\-\=\+\<\>\,\?]/)==-1){
    
    alert("Wrong Input : Invalid Password . Password must include 1 special character like # or $ or &");
     return false;
    }
    
  if(!(pass.match(/[A-Z]/))){
    alert("Wrong Input : Invalid Password . Password must start with an Uppercase Character");
       return false;
     }

  if(conpass != pass){
     alert("Passward is not matching");
     return false;
  
  }
  
   if(email.indexOf("@") == -1 || email.length < 6){
   alert("Wrong Input : Invalid Email . Email must include @ and 6 or more than 6 characters");
    return false;
  }
  else
  {
  alert("**********  Greeting message Message  ******** \n Noras Company thanks for using it's services .\n We have recieved your data .\n You will receive your car Soon .");
  window.location.href = "index.html" ;
  return  true;
  }
}