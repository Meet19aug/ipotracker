function login() {

    var input = document.getElementById('username');
    input.oninvalid = function (event) {
        event.target.setCustomValidity('Username cannot be empty.');
    }

    input.oninput = function (event) {
        event.target.setCustomValidity("");
    }

    var input1 = document.getElementById('password');
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

    var input1 = document.getElementById('exampleInputPassword1');
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
    var regPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (regPass.test(input1.value) == false) {
        alert("Please Enter Password with minimum One uppercase, One Lowercase and One Special Character with minimum length of 6");
        document.getElementById('exampleInputPassword2').value = "";
        document.getElementById('exampleInputPasswod1').value = "";
        document.getElementById('exampleInputPasswod1').focus();

        return false;
    }
    if (input2.value != input1.value) {
        alert('Passwords do not match');
        return false;
        document.getElementById('exampleInputPasswod1').focus();
    }
    if(input2.value != input1.value){
        alert("press sign up to register..");
    }
}

function conatctValidate() {

    var email = document.getElementById("email3");
    var tarea = document.getElementById("textarea");
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
    
    var qos = document.forms["ipoform"]["quanofshare"].value;
    if (qos == "") {
        alert("Please Insert Quantity of share..");
        document.forms.ipoform.quanofshare.focus();
        return false;
    }
    var pos = document.forms["ipoform"]["pricpershare"].value;
    if (pos == "") {
        alert("Please Insert pric per share..");
        document.forms.ipoform.pricpershare.focus();
        return false;
    }
    var regpan = /[A-Z0-9]{10}/;
    var vpan = document.forms["ipoform"]["pan"].value;
    if (vpan == "") {
        alert("Please Insert pan number.");
        document.forms.ipoform.pan.focus();
        return false;
    }
    else if (regpan.test(vpan) == false) {
        alert("Please Enter Valid 10 Digit Pan Number <capital letter and number are allowed only.>..");
        document.forms.ipoform.pan.focus();
        return false;
    }
    var regname = /[a-zA-Z]+[ ][a-zA-Z]+[ ][a-zA-Z]+/;
    var fname = document.forms["ipoform"]["applicantname"].value;
    if (fname == "") {
        alert("Please Insert Valid Name <firstname middlename lastname>..");
        document.forms.ipoform.applicantname.focus();
        return false;
    }
    else if (regname.test(fname) == false) {
        alert("Please Insert Valid Name <firstname middlename lastname>..");
        document.forms.ipoform.applicantname.focus();
        return false;
    }
    var birthdate = document.forms["ipoform"]["date"].value;
    if (birthdate == "") {
        alert("Please Insert your birthdate..");
        document.forms.ipoform.birthdate.focus();
        return false;
    }
    var dpid = document.forms["ipoform"]["dpid"].value;
    if (dpid == "") {
        alert("Please Insert your DPID <16 digit number>..");
        document.forms.ipoform.dpid.focus();
        return false;
    }
    else if(dpid.length!=16)
    {
        alert("Enter 16 digit DP ID");
        document.forms.ipoform.dpid.focus();
        return false;
    }
    var regdpname = /[A-Za-z ]+/;
    var dpname = document.forms["ipoform"]["dpname"].value;
    if (dpname == "") {
        alert("Please Insert DP Name. ");
        document.forms.ipoform.dpname.focus();
        return false;
    }
    else if (regdpname.test(dpname) == false) {
        alert("Please Insert Valid DP Name.");
        document.forms.ipoform.dpname.focus();
        return false;
    }
    var regbankname = /[A-Za-z ]+/;
    var bankname = document.forms["ipoform"]["bankname"].value;
    if (bankname == "") {
        alert("Please Insert Bank Name. ");
        document.forms.ipoform.bankname.focus();
        return false;
    }
    else if (regbankname.test(bankname) == false) {
        alert("Please Insert Valid Bank Name.");
        document.forms.ipoform.bankname.focus();
        return false;
    }
    var regaccno = /[A-Za-z ]+/;
    var accno = document.forms["ipoform"]["accountnum"].value;
    if ( accno.value== "" || accno.length>18 || accno.length<9) {
        alert("Please Insert Valid Account number. ");
        document.forms.ipoform.accountnum.focus();
        return false;
    }
    if(accno.value!=""){
        alert("press submit to submit your form...");
    }
    
}