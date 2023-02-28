function funs() {
    let x = false;

    let n = document.getElementById('name').value;
    let p = /^[a-zA-Z]+$/;
    if (n == "") {
        document.getElementById('ner').innerHTML = "enter value"

    } else if (!p.test(n)) {

        document.getElementById('ner').innerHTML = "need valid input"
    }
    else {
        document.getElementById('ner').innerHTML = ""
        y = true;

    }
    // -----------------------------------------------------------------------
    // -----------------------------------------------------------------------

    let p1 = document.getElementById('phonenumber').value;
    let p2 = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (p1 == "") {
        document.getElementById('er1').innerHTML = "enter the number"
    } else if (!p2.test(p1)) {
        document.getElementById('er1').innerHTML = "need valid number"
    }
    else {
        document.getElementById('er1').innerHTML = ""
        y1 = true;
    }

    // -----------------------------------------------------------------------
    // -----------------------------------------------------------------------

    let a1 = document.getElementById('address').value;
    let a2 = /^[a-zA-Z0-9\s\,\''\-]*$/;
    if (a1 == "") {
        document.getElementById('er2').innerHTML = "enter the address"
    } else if (!a2.test(a1)) {
        document.getElementById('er2').innerHTML = "need valid address"
    }
    else {
        document.getElementById('er2').innerHTML = ""
        y2 = true;
    }

    // -------------------------------------------------------------------
    // -------------------------------------------------------------------

    let aa1 = document.getElementById('address1').value;
    let aa2 = /^[a-zA-Z\s\,\''\-]*$/;
    if (aa1 == "") {
        document.getElementById('er3').innerHTML = "enter the city name"
    } else if (!aa2.test(aa1)) {
        document.getElementById('er3').innerHTML = "need valid city name"
    }
    else {
        document.getElementById('er3').innerHTML = ""
        y3 = true;
    }

    // ---------------------------------------------------------------------
    // ---------------------------------------------------------------------

    let aaa1 = document.getElementById('address2').value;
    let aaa2 = /^[a-zA-Z\s\,\''\-]*$/;
    if (aaa1 == "") {
        document.getElementById('er4').innerHTML = "enter the state name"
    } else if (!aaa2.test(aaa1)) {
        document.getElementById('er4').innerHTML = "need valid state name"
    }
    else {
        document.getElementById('er4').innerHTML = ""
        y4 = true;
    }
    // ------------------------------------------------------------------------
    // ------------------------------------------------------------------------

    let male = document.getElementById("gender1").checked;
    let female = document.getElementById("gender2").checked;

    if (male || female) {
        document.getElementById("er15").innerHTML = ""
        y5 = true;
    }
    else {
        document.getElementById("er15").innerHTML = "plase select a gender"

    }

    // ----------------------------------------------------------------------
    // ----------------------------------------------------------------------

    let da = document.getElementById('date').value
    if (da == "") {
        document.getElementById('er6').innerHTML = "please select date of birth"
    }
    else {
        document.getElementById('er6').innerHTML = ""
        y6 = true;
    }
    // ----------------------------------------------------------------------
    // ----------------------------------------------------------------------
    let e1 = document.getElementById('email').value;
    let e2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})/;
    if (e1 == "") {
        document.getElementById('er7').innerHTML = "enter the email id"
    } else if (!e2.test(e1)) {
        document.getElementById('er7').innerHTML = "need valid email id"
    }
    else {
        document.getElementById('er7').innerHTML = ""
        y7 = true;
    }
    // -----------------------------------------------------------------------
    // -----------------------------------------------------------------------

    let pw = document.getElementById('password').value;

    let pw1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (pw == "") {
        document.getElementById("er8").innerHTML = "please enter a password"

    }
    else if (!pw1.test(pw)) {
        document.getElementById("er8").innerHTML = "please enter vaild password"
    }


    else {
        document.getElementById("er8").innerHTML = ""
        y8 = true;
    }
    // -----------------------------------------------------------------------------
    // -----------------------------------------------------------------------------


    let pw3 = document.getElementById('password2').value;

    if (pw3 == "") {
        document.getElementById("er9").innerHTML = "please enter a password"

    }
    else if (pw3 !== pw) {
        document.getElementById("er9").innerHTML = "password not matched"
    }
    else {
        document.getElementById("er9").innerHTML = ""
        y9 = true;
    }
    // --------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------

    let my = document.getElementById("termsc").checked;

    if (my) {
        document.getElementById("er10").innerHTML = ""
        y10 = true;

    }
    else {
        document.getElementById("er10").innerHTML = "plase accept a agree"
    }

    if (y && y1 && y2 && y3 && y4 && y5 && y6 && y7 && y8 && y9 && y10) {
        alert('the form has been submitted successfully')
    } else {
        alert('please correct the error')
    }

}
// Mas123@*ikjhh