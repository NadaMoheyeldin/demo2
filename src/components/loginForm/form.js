import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//form creation
function MyForm(){
    return(
        <>
        <h1>Login Form</h1>
        <form>
            <label htmlFor="email">Email Address</label>
            <input id="email" type="text"></input><br/>
            <label htmlFor="pass">Password</label>
            <input id="pass" type="text"></input><br/>
            
            <button type="submit" className="btn btn-primary">Login</button>
        </form>

        <p>Don't have an account? <a href="/register">Register</a></p>
        <p>Forgot password? <a href="/forgot-password">Reset</a></p>
        <p>Login with Google</p>
        <button>Google</button>
        </>
    )
}
export default MyForm;