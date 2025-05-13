document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const mobile = document.getElementById("mobile-number");
    const dob = document.getElementById("dob");
    const address = document.getElementById("address");
    const city = document.getElementById("city");
    const areapin = document.getElementById("areapin");
    const state = document.getElementById("state");
    const password = document.getElementById("password");
    const gender = document.querySelectorAll("input[name='gender']");

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

    
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            alert("Please enter a valid email address.");
            email.focus();
            valid = false;
        }

    
        else if (!/^[0-9]{10}$/.test(mobile.value)) {
            alert("Please enter a 10-digit mobile number.");
            mobile.focus();
            valid = false;
        }

        else if (![...gender].some(g => g.checked)) {
            alert("Please select your gender.");
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

        else if (!/^[0-9]{6}$/.test(areapin.value)) {
            alert("Please enter a 6-digit area PIN.");
            areapin.focus();
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
