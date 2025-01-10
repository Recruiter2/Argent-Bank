import logo from '../../assets/argentBankLogo.png'; //wroks don't change slight bug out of nowhere
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { logOut } from "../../../redux/auth.action";
import {faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import './navbar.css';

function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isConnected = useSelector((state) => state.auth.isConnected);
  const user = useSelector((state) => state.auth.user);


  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch(logOut());
    navigate("/login");
  };
  return (
    <nav className='main-nav'>
      
      
          <NavLink to="/"  className={'main-nav-logo'}>
            <img src={logo} alt="Logo Argent Bank" className="main-nav-logo-image"/>
            <h1 className='sr-only'>Argent Bank</h1>
          </NavLink>
          
          {!isConnected ? (
            <div>
            <NavLink to="/login" className='main-nav-item'>
            <FontAwesomeIcon icon={faCircleUser } /> {' ' /* added space here*/} 
             Sign in</NavLink>
          </div>
          ) : (
            <div className="nav-list">

            <NavLink 
              className="nav-item" 
              to={"/profile"}>
                <FontAwesomeIcon icon={faCircleUser} />
              <p>{user.userName}</p>
            </NavLink>

            <NavLink 
              className="nav-item" 
              to={"/"} 
              onClick={handleLogout}>
                <FontAwesomeIcon icon={faRightFromBracket} />
              <p>Sign Out</p>
            </NavLink>

            </div>
          )}
          
         
   
    </nav>
  );
}

export default Nav;