// The JS required for Validation of Contact form would go in this file

function validateForm() {
    var x = document.cform["email"]["name"] ["radio"].value;
    if (x == "") {
        alert("must be filled out");
        return false;
    }
}