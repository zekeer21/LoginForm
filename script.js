function validateForm() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        
        var usernameError = document.getElementById("usernameError");
        var passwordError = document.getElementById("passwordError");

        var usernameRegex = /^[a-zA-Z0-9_]+$/;
        var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        if (!usernameRegex.test(username)) {
            alert("Username can only contain letters, numbers, and underscores");
            return false;
        };

        if (!passwordRegex.test(password)) {
            alert("Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter");
            return false;
        };
        
        alert("Login successful!");
        return true;
    }