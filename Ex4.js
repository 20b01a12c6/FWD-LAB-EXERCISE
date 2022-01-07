function FormValidation() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var phonenumber = document.getElementById("phno");
    var gender = document.getElementById("gender");
    var lang = document.getElementById("lang");
    if (name.value.length < 6 || name.value.length > 30) {
        alert("Name length should be more than 6 and less than 30");

    }

    else if (!(email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
        alert("please enter a valid email id");

    }

    else if (password.value.length < 5 || password.value.length > 15) {
        alert("password length must be between 5-15 characters");

    }
    else if (phno.value.length != 10) {
        alert("phonenumber should be of length 10 only");

    }
    else if (gender.value == "gender") {
        alert("choose gender");
    }

    else if (lang.value == "Language") {
        alert("choose languge");
    }

    else {
        document.write("your response submitted successfully");
    }

}

