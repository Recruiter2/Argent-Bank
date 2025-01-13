import { useNavigate} from 'react-router-dom';
function Account_n({ title, amount, description, transaction }) {
   const navigate = useNavigate();
  
    const redirectToErrorPage = () => {
        // Redirect to the error page
        navigate('/error');
    };
    return (
        
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">{title}</h3>
            <p className="account-amount">{amount}</p>
            <p className="account-amount-description">{description}</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button" onClick={redirectToErrorPage}>{transaction}</button>
          </div>
        </section>
    );
  }

  export default Account_n;