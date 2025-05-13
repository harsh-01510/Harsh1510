document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const dob = document.getElementById("dob");
    const address = document.getElementById("address");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const password = document.getElementById("password");
   
    form.addEventListener("submit", function(event) {
        let valid = true;

        if (firstName.value.trim() === "") {
            alert("First Name is required.");
            firstName.focus();
            valid = false;
        }
    
        else if (lastName.value.trim() === "") {
            alert("Last Name is required.");
            lastName.focus();
            valid = false;
        }


    
        else if (dob.value === "") {
            alert("Please select your date of birth.");
            dob.focus();
            valid = false;
        }


        else if (address.value.trim() === "") {
            alert("Please enter your address.");
            address.focus();
            valid = false;
        }

    
        else if (city.value.trim() === "") {
            alert("Please enter your city.");
            city.focus();
            valid = false;
        }

       

        else if (state.value.trim() === "") {
            alert("Please enter your state.");
            state.focus();
            valid = false;
        }


        else if (password.value.trim().length < 6) {
            alert("Password must be at least 6 characters long.");
            password.focus();
            valid = false;
        }

        if (valid) {
            window.location.href = 'thank_you.html';
        } else {
            event.preventDefault();
        }
    });
});
