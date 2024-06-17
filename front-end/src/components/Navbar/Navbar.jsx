import logo from '../../assets/argentBankLogo.png'; //wroks don't change slight bug out of nowhere
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Nav() {
  return (
    <nav className='main-nav'>
      
      
          <NavLink to="/" activeclassname="active" className={'main-nav-logo'}>
            <img src={logo} alt="Logo Argent Bank" />
            <h1 className='sr-only'>Argent Bank</h1>
          </NavLink>
  
          <NavLink to="/sign-in" activeclassname="active" className='aboutlink'>Sign in</NavLink>
   
    </nav>
  );
};

export default Nav;