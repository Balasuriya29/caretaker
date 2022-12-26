function Donation(){
    var name = document.getElementById("inputName").value;
    var age = document.getElementById("inputAge").value;
    var proof = document.getElementById("inputProof").value;
    var email = document.getElementById("inputEmail").value;
    var phno = document.getElementById("inputPhno").value; 
    var address = document.getElementById("inputAddress").value;
    var city = document.getElementById("inputCity").value;
    var state = document.getElementById("inputState");
    var zip = document.getElementById("inputZip").value;
    var blood = document.getElementById("inputBloodGrp");
    var Med = document.getElementById("inputHistory");
    var check = document.getElementById("gridCheck");
    
    var a = "@gmail.com"
    let temp = email.indexOf("@");
    let temp2 = email.length;
    let temp3 = email.substring(temp,temp2);

    let b = Number(phno.length);

    //Name Js
    if(name != "")
    {
        for(var i=name.length;i>0;i--)
        {
            if(isNaN(name[i]))
            {
               
            }
            else{
                alert("Name contains numbers");
                return false;
            }
        }
    }
    else{
        alert("Please Enter your Name!!!");
        return false;
    }

    //Age Js
    if(age!= "")
    {
        if(age>17 && age<55 )
        {

        }
        else{
            alert("Please Enter Valid Age, if not you are not eligible for Blood donation");
            return false;
        }
    }
    else{
        alert("Please Enter Your Age!!!");
        return false;
    }

    //Proof Js
    if(proof!="")
    {

    }
    else{
        alert("Please Submit Your Age Proof for Future Verification");
        return false;
    }

    //Email Js
    if(a==temp3)
    {

    }
    else{
        alert("Enter Valid Email ID in the format @gmail.com");
        return false;
    }

    // Ph No Js
    if(phno != "")
    {
        if(b==10){

        }
        else{
            alert("Enter Valid Moblie Number");
            return false;
        }
    }
    else{
        alert("Please Enter Your Mobile Number");
        return false;
    }

    //Address 1 Js
    if(address!="")
    {

    }
    else{
        alert("Please Enter Your Address 1")
    }

    //City JS
    if(city=="")
    {
        alert("Please Enter your City");
        return false;
    }
    else{

    }

    //State Js
    if(state.selectedIndex!="")
    {

    }
    else{
        alert("Please Select Any State");
        return false;
    }

    // Zip JS
    if(zip=="")
    {
        alert("Please Enter your City Zip");
        return false;
    }
    else{

    }

    //Blood Js
    if(blood.selectedIndex!="")
    {

    }
    else{
        alert("Please Select Anyone Blood Group");
        return false;
    }

    //Terms and Con Js
    if(check.checked!="")
    {

    }
    else{
        alert("Please verify the terms and conditions");
        return false;
    }
}


function request(){
    var email2 = document.getElementById("inputEmail2").value;
    var phno2 = document.getElementById("inputPhno2").value;
    var blood2 = document.getElementById("inputBloodGrp2");
    var check2 = document.getElementById("gridCheck2"); 

    var a = "@gmail.com"
    let temp = email2.indexOf("@");
    let temp2 = email2.length;
    let temp3 = email2.substring(temp,temp2);

    //Email 2 Js
    if(a==temp3)
    {

    }
    else{
        alert("Enter Valid Email ID in the format @gmail.com");
        return false;
    }

    // Ph No 2 Js
    if(phno2 != "")
    {
        if(b==10){

        }
        else{
            alert("Enter Valid Moblie Number");
            return false;
        }
    }
    else{
        alert("Please Enter Your Mobile Number");
        return false;
    }


    //Blood 2 Js
    if(blood2.selectedIndex!="")
    {

    }
    else{
        alert("Please Select Anyone Blood Group");
        return false;
    }

    //Terms and Con 2 Js
    if(check2.checked!="")
    {

    }
    else{
        alert("Please verify the terms and conditions");
        return false;
    }
}

function login(user, pass){
    var user = document.getElementById("Username").value;
    var pass = document.getElementById("Password").value;

    if(user!="")
    {

    }
    else{
        alert("Please Enter your Username");
        return false;
    }

    if(pass!="")
    {
        if(pass.length >=4 && pass.length<=8)
        {
            console.log(user+pass)
            if(user == "admin" && pass == "admin"){
                document.getElementById("myForm").action = "/index6.html";
            }
            return true;

        }
        else{
            alert("Invalid Password(Min Size:4 - Max Size:8)");
            return false;
        }
    }
    else{
        alert("Please Enter your Password");
        return false;
    }
}

function registor(){
    var user2=document.getElementById("user2").value;
    var email2=document.getElementById("email2").value;
    var pass2=document.getElementById("pass2").value;
    var pass3=document.getElementById("pass3").value;

    var a = "@gmail.com"
    let temp = email2.indexOf("@");
    let temp2 = email2.length;
    let temp3 = email2.substring(temp,temp2);

    if(user2!="")
    {
        
    }
    else{
        alert("Please Enter the UserName");
        return false;
    }

    if(a==temp3)
    {

    }
    else{
        alert("Enter Valid Email ID in the format @gmail.com");
        return false;
    }

    if(pass2!="" && pass3!="")
    {
        if((pass2.length>=4 && pass3.length>=4) && (pass2.length<=8 && pass3.length<=8))
        {
            if(pass2==pass3)
            {

            }
            else{
                alert("Create and Confirm Password are Not Same");
                return false;
            }
        }
        else{
            alert("Invalid Password(Min Size:4 - Max Size:8)");
            return false;
        }
    }
    else{
        alert("Create or Confirm Password is Empty");
        return false;
    }
}

function showPasswordSignUpForm() {
    var x = document.getElementById("pass2");
    var y = document.getElementById("pass3");
    if (x.getAttribute('type') == "password") {
      x.setAttribute('type', 'text');
      y.setAttribute('type','text');
    } else {
      x.setAttribute('type','password');
      y.setAttribute('type','password');
    }
  }

function showPasswordLoginForm() {
    var x = document.getElementById("Password");
    if(x.getAttribute('type') == "password"){
        x.setAttribute('type','text');
    }
    else{
        x.setAttribute('type','password');
    }
}

// function addup(){
//     var name =document.addEventListener("inputNameD").value;
//     var spe = document.addEventListener("inputSpecial").value;
//     var advice = document.addEventListener("inputAdvice").value;
//     var phno = document.addEventListener("inputPhnoD").value;
//     var email = document.addEventListener("inputEmailD").value;
//     var photo = document.addEventListener("inputNameD").value;
//     var agree = document.addEventListener("inputNameD").value;
// }

var star = document.getElementById("star1").addEventListener("click",function(){alert("Added to favorites");});
