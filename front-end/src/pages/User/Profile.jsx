import React, { useState, useEffect } from 'react';
import './user.css';
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
    
    const toggleEdit = () => {
        setupdateUsername(!updateUsername);
        if (!updateUsername) {
            setNewUserName(userProfile.userName || '');
        }
    };

    const handleSave = () => {
        dispatch(editUsername(newUserName));
        alert('Your username has been changed');
        setInitialUserName(newUserName); 
        toggleEdit();
    };

    const handleCancel = () => {
        setNewUserName(initialUserName);
        toggleEdit();
    };

    return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back <br /> {userProfile.firstName} {userProfile.lastName} ! </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account_n title="Argent Bank Checking (x8349)" amount = "$2,082.79" status = "Available Balance" />
      <Account_n title="Argent Bank Savings (x6712)" amount = "$10,928.42" status = "Available Balance" />
      <Account_n title="Argent Bank Credit Card (x8349)" amount = "$184.30" status = "Current Balance" />
      
    </main>
  );
};

export default User;