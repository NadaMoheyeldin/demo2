import  { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

//form creation
function MyForm({ onLoginSuccess }){
    // Handle change function to update state based on input field changes
    // This function is called whenever the input fields change
    // It checks which input field is being changed and updates the corresponding state
    // e.target.name is used to identify which input field is being changed
    // e.target.value is the new value of the input field
    // The function updates the state variables email and password accordingly

    const [email, setEmail] = useState(''); // Initialize email state
    const [password, setPassword] = useState('');// Initialize password state
    const [emailError, setEmailError] = useState(''); //error state for email
    const [passwordError, setPasswordError] = useState(''); //error state for password
    const [showPassword, setShowPassword] = useState(false); 
    
    // This state variable is used to toggle the visibility of the password input field
    // It is initially set to false, meaning the password will be hidden
    
    const handleChange = (e) => {
        if (e.target.name ==='email'){
            
            setEmail(e.target.value);
            //console.log(e.target.value);
            // Validate email format
           
           setEmailError(e.target.value.length === 0 ? 'Email is required' :
            e.target.value.length < 5 ? 'Email must be at least 5 characters long' : 
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value) ? '' : 'Invalid email format, please enter something like example@gmail.com');
            // Set email error based on the validation checks
        }

         if (e.target.name === 'password'){
            setPassword(e.target.value);
            //console.log(e.target.value);

            // Validate password
            setPasswordError(e.target.value.length === 0 ? 'Password is required' :
            e.target.value.length < 8 ? 'Password must be at least 8 characters long' :
            !/[A-Z]/.test(e.target.value) ? 'Password must contain at least one uppercase letter' :
            !/[a-z]/.test(e.target.value) ? 'Password must contain at least one lowercase letter' :
            !/[0-9]/.test(e.target.value) ? 'Password must contain at least one number' :
            !/[!@#$%^&*]/.test(e.target.value) ? 'Password must contain at least one special character' : '');
            // Set password error based on the validation checks
        }
    }
    // Handle submit function to process the form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        // Check if there are any errors before proceeding
        if (!email) {
            setEmailError('Email is required');
        }
        if (!password) {
            setPasswordError('Password is required');
        }
        // Check if there are any errors before proceeding
        if (emailError || passwordError || !email || !password) {
            alert('Please fix the errors before submitting');
            return;
        }
    
        // If no errors, proceed with form submission logic
        console.log('Form submitted successfully with email:', email, 'and password:', password);

        // Call the login success handler passed from App.js
        onLoginSuccess(); // <-- This switches to ToDo page

        // Reset the form fields after submission
        setEmail('');
        setPassword('');
        setEmailError('');
        setPasswordError('');
    };

    return(
        <>
        <h1>Login Form</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="email">Email Address: </label>
            <input 
            id="email"
            type="text"
            value={email} 
            onChange={(e) => handleChange(e)}
            name='email'
            className={`form-control ${emailError ? 'is-invalid' : email ? 'is-valid' : ''}`}
            autoFocus></input><br/> 

            {emailError && <span className="text-danger">{emailError}</span>}<br/>
            {/* Display email error if it exists */}

            <label htmlFor="pass">Password: </label>
            <div className="input-group">
            <input 
            id="pass"
            type={showPassword ? 'text':'password'} 
            value={password} 
            onChange={(e) => handleChange(e)}
            name='password'
            className={`form-control ${passwordError ? 'is-invalid': password ? 'is-valid':''}`}></input>
            
            <button 
            type='button'
            className='btn btn-outline-secondary'
            onClick={()=> setShowPassword(!showPassword)}>{showPassword?'':''}<i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
            </button>
            </div>
            <br/>
            
            {passwordError && <span className="text-danger">{passwordError}</span>}<br/>
            {/* Display password error if it exists */}
            
            <button type="submit" className="btn btn-primary"
            disabled={emailError||passwordError}>Login</button><br/>
            
        </form><br/>
        </>
    )
}
export default MyForm;