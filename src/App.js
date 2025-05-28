//import logo from './logo.svg';
import './App.css';
import MyForm from './components/form/form';
import MyRegisterForm from './components/register/register';
import React, { useState } from 'react';
import ToDo from './components/todo/todo';  


function App() {

  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };
  return (
    <div className="App">
      
      {/* Show To-Do only if logged in */}
      {isLoggedIn ? (
        <ToDo />
      ) : isRegistering ? (
        <MyRegisterForm />
      ) : (
        <MyForm onLoginSuccess={handleLoginSuccess} />
      )}

      
     
      {/* Only show links/buttons if NOT logged in */}
      {!isLoggedIn && (
        <>
          <p>
            Don't have an account?{' '}
            <a href="#" onClick={() => setIsRegistering(!isRegistering)}>
              {isRegistering ? 'Back to Login' : 'Register'}
            </a>
          </p>

          {!isRegistering && (
            <>
              <p>
                Forgot password? <a href="/forgot-password">Reset</a>
              </p>
              <br />
              <p>Login with Google</p>
              <button>Google</button>
              <br />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
