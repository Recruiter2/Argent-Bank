import React, { useState, useEffect } from 'react';
import './user.css';
import accountData from '../../data/accountdata.json';
import Account_n  from '../../components/Account_n/Account_n';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, editUserName } from '../../../redux/auth.action';
const User = () => {
  
    const dispatch = useDispatch();
    const userProfile = useSelector(state => state.auth.user); //Select "user" in reducer
    const [editing, setEditing] = useState(false); // pour gerer l'etat dans le composant seulement here we work on the edit username

    useEffect(() => {
      dispatch(getProfile());
    }, [dispatch]); 

    /* edit username */

    const [updateUsername, setupdateUsername] = useState(false);
    const [newUserName, setNewUserName] = useState('');
    const [initialUserName, setInitialUserName] = useState('');

    useEffect(() => {
        if (userProfile) {
            setNewUserName(userProfile.userName || '');
            setInitialUserName(userProfile.userName || '');
        } else {
            setNewUserName('');
            setInitialUserName('');
        }
    }, [userProfile]);

    const edit = (e) => {
      e.preventDefault();
      setEditing(!editing); // Mettre à jour l'état pour afficher le formulaire
    };
    
    const toggleEdit = () => {
        setupdateUsername(!updateUsername);
        if (!updateUsername) {
            setNewUserName(userProfile.userName || '');
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const newUserName = e.target.elements.userName.value;
        dispatch(editUserName(newUserName));
        //alert('Your username has been changed');
        //setInitialUserName(newUserName); 
        //toggleEdit();
        edit(e);

    };

    const handleCancel = () => {
        setNewUserName(initialUserName);
        toggleEdit();
    };

    return (
    <main className="main bg-dark">
      {!editing ? (
        <section className="header">
          <h1>Welcome back <br /> {userProfile.firstName} {userProfile.lastName} ! </h1>
          <button className="edit-button" onClick={edit}>Edit Name</button>
        </section>
      ) : (
        <form className='profil-header' onSubmit={handleSave}>
            <p>Edit user name</p>
            <label htmlFor="userName">New user name</label>
            <input
                type="text"
                id="userName"
                defaultValue={userProfile.userName}
                required
            />
            <label htmlFor="firstName">First name</label>
            <input
                type="text"
                id="firstName"
                defaultValue={userProfile.firstName}
                disabled
            />
            <label htmlFor="lastName">Last name</label>
            <input
                type="text"
                id="lastName"
                defaultValue={userProfile.lastName}
                disabled
            />
            <section className='profil-button'>
              <button type="submit" >Save</button>
              <button type="button" onClick={handleCancel}>Cancel</button>
            </section>
            
        </form>
      
      )}
      
      <h2 className="sr-only">Accounts</h2>
      <Account_n title="Argent Bank Checking (x8349)" amount = "$2,082.79" status = "Available Balance" />
      <Account_n title="Argent Bank Savings (x6712)" amount = "$10,928.42" status = "Available Balance" />
      <Account_n title="Argent Bank Credit Card (x8349)" amount = "$184.30" status = "Current Balance" />
      
    </main>
  );
};

export default User;