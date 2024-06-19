import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

function Login() {
  return (
    <main className='main bg-dark'>
               
        <section class="sign-in-content">
            <FontAwesomeIcon icon={faCircleUser } /> {' ' /* added space here*/} 

               <h1>Sign in</h1>
                <form>
                  <div className='input-wrapper'><label for="username">Username</label
                  ><input type="text" id="username" /></div>

                  <div className='input-wrapper'><label for="password">Password</label
                  ><input type="password" id="password" /></div>
                  
                  <div class="input-remember">
            <input type="checkbox" id="remember-me" /><label for="remember-me"
              >Remember me</label
            >
          </div>
                  <button class="sign-in-button">Sign In</button>
                </form>
  
               </section>
          </main>
  );
};

export default Login;