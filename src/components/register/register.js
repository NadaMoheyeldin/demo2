import { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyRegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleChange = (e) => {
    const { name: fieldName, value } = e.target;

    if (fieldName === 'name') {
      setName(value);
      setNameError(
        value.length === 0
          ? 'Name is required'
          : value.length < 3
          ? 'Name must be at least 3 characters long'
          : ''
      );
    }

    if (fieldName === 'email') {
      setEmail(value);
      setEmailError(
        value.length === 0
          ? 'Email is required'
          : value.length < 5
          ? 'Email must be at least 5 characters long'
          : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ''
          : 'Invalid email format'
      );
    }

    if (fieldName === 'password') {
      setPassword(value);
      setPasswordError(
        value.length === 0
          ? 'Password is required'
          : value.length < 8
          ? 'Password must be at least 8 characters long'
          : !/[A-Z]/.test(value)
          ? 'Must contain at least one uppercase letter'
          : !/[a-z]/.test(value)
          ? 'Must contain at least one lowercase letter'
          : !/[0-9]/.test(value)
          ? 'Must contain at least one number'
          : !/[!@#$%^&*]/.test(value)
          ? 'Must contain at least one special character (!@#$%^&*)'
          : ''
      );

      // Check confirm password again
      if (confirmPassword && confirmPassword !== value) {
        setConfirmPasswordError('Passwords do not match');
      } else {
        setConfirmPasswordError('');
      }
    }

    if (fieldName === 'confirmPassword') {
      setConfirmPassword(value);
      setConfirmPasswordError(
        value !== password ? 'Passwords do not match' : ''
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!name.trim()) {
      setNameError('Name is required');
      isValid = false;
    }

    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
      isValid = false;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }

    if (!isValid) {
      alert('Please fix errors before submitting.');
      return;
    }

    // All good – proceed with registration
    console.log('Registration successful!', {
      name,
      email,
      password,
    });

    // Reset form
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            className={`form-control ${nameError ? 'is-invalid' : name ? 'is-valid' : ''}`}
          />
          {nameError && <div className="invalid-feedback">{nameError}</div>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={`form-control ${emailError ? 'is-invalid' : email ? 'is-valid' : ''}`}
          />
          {emailError && <div className="invalid-feedback">{emailError}</div>}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              className={`form-control ${
                passwordError ? 'is-invalid' : password ? 'is-valid' : ''
              }`}
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
            </button>
          </div>
          {passwordError && (
            <div className="invalid-feedback">{passwordError}</div>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            className={`form-control ${
              confirmPasswordError ? 'is-invalid' : confirmPassword ? 'is-valid' : ''
            }`}
          />
          {confirmPasswordError && (
            <div className="invalid-feedback">{confirmPasswordError}</div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-success"
          disabled={!!(nameError || emailError || passwordError || confirmPasswordError)}
        >
          Register
        </button>
      </form>
    </>
  );
}

export default MyRegisterForm;