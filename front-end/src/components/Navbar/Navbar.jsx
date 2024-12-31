import logo from '../../assets/argentBankLogo.png'; //wroks don't change slight bug out of nowhere
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

import './navbar.css';

function Nav() {
  return (
    <nav className='main-nav'>
      
      
          <NavLink to="/"  className={'main-nav-logo'}>
            <img src={logo} alt="Logo Argent Bank" className="main-nav-logo-image"/>
            <h1 className='sr-only'>Argent Bank</h1>
          </NavLink>
          
          <div>
            <NavLink to="/login" className='main-nav-item'>
            <FontAwesomeIcon icon={faCircleUser } /> {' ' /* added space here*/} 
             Sign in</NavLink>
          </div>
         
   
    </nav>
  );
};

export default Nav;