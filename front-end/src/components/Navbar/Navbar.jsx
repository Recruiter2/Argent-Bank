import logo from '../../assets/argentBankLogo.png'; //wroks don't change slight bug out of nowhere
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Nav() {
  return (
    <nav className='navbar'>
      <img src={logo} alt="Logo Argent Bank" />
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/sign-in" activeclassname="active" className='aboutlink'>Sign in</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;