function login() {

    var input = document.getElementById('exampleInputEmail1');
    input.oninvalid = function (event) {
        event.target.setCustomValidity('Email Address cannot be empty.');
    }

    input.oninput = function (event) {
        event.target.setCustomValidity("");
    }

    var input1 = document.getElementById('exampleInputPassword1');
    input1.oninvalid = function (event) {
        event.target.setCustomValidity('Password cannot be empty.');
    }

    input1.oninput = function (event) {
        event.target.setCustomValidity("");
    }

}

function signup() {

    var input = document.getElementById('exampleInputEmai1');
    input.oninvalid = function (event) {
        event.target.setCustomValidity('Email Address cannot be empty.');
    }
    input.oninput = function (event) {
        event.target.setCustomValidity("");
    }

    var input1 = document.getElementById('exampleInputPasswod1');
    input1.oninvalid = function (event) {
        event.target.setCustomValidity('Password cannot be empty.');
    }
    input1.oninput = function (event) {
        event.target.setCustomValidity("");
    }

    var input2 = document.getElementById('exampleInputPassword2');
    input2.oninvalid = function (event) {
        event.target.setCustomValidity('Password cannot be empty.');
    }
    input2.oninput = function (event) {
        event.target.setCustomValidity("");
    }

    if (input2.value != input1.value) {
        alert('Passwords do not match');
        return false;
        document.getElementById('exampleInputPasswod1').focus();
    }

    var regPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (input1.value.match(regPass) == false) {
        alert("Please Enter Password with minimum One uppercase, One Lowercase and One Special Character with minimum length of 6");
        document.getElementById('exampleInputPassword2').value = "";
        document.getElementById('exampleInputPasswod1').value = "";
        document.getElementById('exampleInputPasswod1').focus();

        return false;
    }
}

function conatctValidate(){
    
    var email=document.getElementById("email3");
    var tarea=document.getElementById("textarea");
    email.oninvalid = function (event) {
        event.target.setCustomValidity('Please enter a valid email.Eg: jamesbond007@gmail.com');
    }
    email.oninput = function (event) {
        event.target.setCustomValidity("");
    }

    tarea.oninvalid = function (event) {
        event.target.setCustomValidity('Enter your query/ies.');
        document.getElementById("textarea").focus();
    }
   tarea.oninput = function (event) {
        event.target.setCustomValidity("");
    }
}
function validate_form() {

    var pid = document.getElementById("pan");
    var fname1 = document.getElementById("fname");
    var dpid1 = document.getElementById("dpid");
    var bname1 = document.getElementById("bname");
    var dpname1 = document.getElementById("dpname");
    var acno = document.getElementById("accountnum");

    var pan_length = pid.value.length;
    if (pan_length != 10){
        alert("Please Enter a valid 10 Digit pan number.");
        document.getElementById("pan").focus();
        return false;
    }
    pid.oninvalid = function (event) {
        event.target.setCustomValidity('Capital letters and numbers only.Eg:FF880099TW');
    }
    pid.oninput = function (event) {
        event.target.setCustomValidity("");
    }

    fname1.oninvalid = function (event) {
        event.target.setCustomValidity("Type full name. Eg:Elon Mukesh Ambani");
    }
    fname1.oninput = function (event) {
        event.target.setCustomValidity("");
    }

    if(dpid1.value.length!=16)
    {
        alert("Enter 16 digit DP ID");
        document.getElementById("dpid").focus();
        return false;
    }

    if(dpname1.value=="")
    {
        alert("Enter Bank name in DP name");
        document.getElementById("dpname").focus();
        return false;
    }
    dpname1.oninvalid = function (event) {
        event.target.setCustomValidity('Letters are only allowed.');
    }
    dpname1.oninput = function (event) {
        event.target.setCustomValidity("");
    }

    if(bname1.value=="")
    {
        alert("Enter Bank name in Bank Name name");
        document.getElementById("bname").focus();
        return false;
    }
    bname.oninvalid = function (event) {
        event.target.setCustomValidity('Letters are only allowed.');
    }
    bname.oninput = function (event) {
        event.target.setCustomValidity("");
    }

    if(acno.value== "" || acno.value.length>18 || acno.value.length<9)
    {
        alert("Enter Account Number between 9 to 18 length.");
        document.getElementById("accountnum").focus();
        return false;
    }
}