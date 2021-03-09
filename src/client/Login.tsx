import React from "react";

function Login() {
    return (
        <div className="login">
            <label htmlFor="">Username</label>
            <input type="text" />
            <label htmlFor="">Password</label>
            <input type="password" />
            <a href="#">Forgot password</a>
            <button>Login</button>
        </div>
    );
}

export default Login;
