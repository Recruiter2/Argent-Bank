import { NavLink } from "react-router-dom";
import "./errorPage.css";

function ErrorPage() {


  return (
    <main id="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>

      <NavLink to="/">Retourner sur la page d'accueil</NavLink>

    </main>
  );
}

export default ErrorPage;