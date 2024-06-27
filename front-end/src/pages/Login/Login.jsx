import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../../redux/auth.action.jsx';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loginError = useSelector(state => state.auth.error);

  const handlelogIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }

    setIsLoading(true); //what is this?

    try {
      await dispatch(logIn({ email, password, rememberMe }));
      navigate('/profile');

    } catch (error) {
      setIsLoading(false);
    }
  };


  return (
    <main className='main bg-dark'>

      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} /> {' ' /* added space here*/}

        <h1>Sign in</h1>
        {loginError && <p>{loginError}</p>}
        <form onSubmit={handlelogIn}>
          <div className='input-wrapper'><label htmlFor="username">Username</label>
            <input type="text" id="username" autoComplete='username' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className='input-wrapper'><label htmlFor="password">Password</label>
            <input type="password" id="password" autoComplete='current-password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className="input-remember">
            <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}/><label htmlFor="remember-me">
              Remember me </label>
          </div>
          <button type="submit" className="sign-in-button" disabled={isLoading}> {isLoading? 'Connecting ...' : 'Sign in'}</button>
        </form>

      </section>
    </main>
  );
};

export default Login;