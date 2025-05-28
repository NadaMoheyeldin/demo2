//import logo from './logo.svg';
import './App.css';
import MyForm from './components/form/form';
import MyRegisterForm from './components/register/register';
import React, { useState } from 'react';



function App() {

  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="App">
      
      {isRegistering ? (
        <MyRegisterForm />
      ) : (
        <MyForm />
      )}

      
      <p>
        Don't have an account?{' '}
        <a href="#" onClick={() => setIsRegistering(true)}>
          Register
        </a>
      </p>

        <p>Forgot password? <a href="/forgot-password">Reset</a></p><br/>
        <p>Login with Google</p>
        <button>Google</button><br/> 
    </div>
  );
}

export default App;
