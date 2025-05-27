import  { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//form creation
function MyForm(){

    const [email, setEmail] = useState(''); // Initialize email state
    const [password, setPassword] = useState('');// Initialize password state
    // Handle change function to update state based on input field changes
    // This function is called whenever the input fields change
    // It checks which input field is being changed and updates the corresponding state
    // e.target.name is used to identify which input field is being changed
    // e.target.value is the new value of the input field
    // The function updates the state variables email and password accordingly

    const handleChange = (e) => {
        if (e.target.name ==='email'){
            setEmail(e.target.value);
            console.log(e.target.value);

        }else if (e.target.name === 'password'){
            setPassword(e.target.value);
            console.log(e.target.value);
       
        }
    }

    return(
        <>
        <h1>Login Form</h1>
        <form>
            <label htmlFor="email">Email Address: </label>
            <input id="email" type="text" value={email} 
            onChange={(e) => handleChange(e)}
            name='email'></input><br/> 

            <label htmlFor="pass">Password: </label>
            <input id="pass" type="text" value={password} 
            onChange={(e) => handleChange(e)}
            name='password'></input><br/> 
            
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