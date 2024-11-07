
async function MyButton(event) {
    event.preventDefault(); 
  
    let userName = document.getElementById('userName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let cpassword = document.getElementById('cpassword').value;
  
    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');
    let cpasswordError = document.getElementById('cpasswordError');
  
    let valid = true;
  
    if (userName.trim() === "") {
        nameError.textContent = "Username is required*";
        nameError.style.color = "red";
        nameError.style.fontSize = "13px";
        nameError.style.paddingLeft = "15px";
        valid = false;
    } else {
        nameError.textContent = '';
    }
  
    if (email.trim() === "") {
        emailError.textContent = "Email is required*";
        emailError.style.color = "red";
        emailError.style.fontSize = "13px";
        emailError.style.paddingLeft = "15px";
        valid = false;
    } else {
        emailError.textContent = '';
    }
  
    if (password.trim() === "") {
        passwordError.textContent = "Password is required*";
        passwordError.style.color = "red";
        passwordError.style.fontSize = "13px";
        passwordError.style.paddingLeft = "15px";
        valid = false;
    } 
    else if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        passwordError.style.color = "red";
        passwordError.style.fontSize = "13px";
        passwordError.style.paddingLeft = "15px";
        valid = false;
    }
    else {
        passwordError.textContent = '';
    }

    if (cpassword.trim() === "") {
        cpasswordError.textContent = "Confirm Password is required*";
        cpasswordError.style.color = "red";
        cpasswordError.style.fontSize = "13px";
        cpasswordError.style.paddingLeft = "15px";
        valid = false;
    } else {
        cpasswordError.textContent = '';
    }

    if (password !== cpassword) {
        cpasswordError.textContent = "Password does not match*";
        cpasswordError.style.color = "red";
        cpasswordError.style.fontSize = "13px";
        cpasswordError.style.paddingLeft = "15px";
        valid = false;
    }
   
    document.getElementById('form').reset();
    
    if (valid) {
        const data = {
            userName: userName,
            email: email,
            password: password,
            cpassword: cpassword
        };

        try {
            const response = await fetch('https://67286ba3270bd0b975555c01.mockapi.io/loginpage/User', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Registration successfull:", result);
                alert("Form submitted successfully!");
            } else {
                throw new Error("Registration faild");
            }
        } catch (error) {
            console.error(" Error:", error);
            alert("There was an error submitting the form.");
        }
    }
    
}
