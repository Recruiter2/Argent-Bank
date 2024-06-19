import './user.css';
import Account_n  from '../../components/Account_n/Account_n';
function User() {
  return (
    <main class="main bg-dark">
      <div class="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button class="edit-button">Edit Name</button>
      </div>
      <h2 class="sr-only">Accounts</h2>
      <Account_n title="Argent Bank Checking (x8349)" amount = "$2,082.79" status = "Available Balance" />
      <Account_n title="Argent Bank Savings (x6712)" amount = "$10,928.42" status = "Available Balance" />
      <Account_n title="Argent Bank Credit Card (x8349)" amount = "$184.30" status = "Current Balance" />
      
    </main>
  );
};

export default User;