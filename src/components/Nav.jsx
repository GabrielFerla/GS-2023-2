import { Link } from 'react-router-dom';
//importando o o componente para ser estilizando
import '../css/nav.css';

function Nav() {
  return (
    // abertura do componente de estilização
    <>
      <header className="navbar">
        <div className="title-left">Med</div>
        <div className="title-right">Global Solution 2023 - Engenharia de Software</div>
      </header>
    </>
    //fechamento do componente de estilização
  );
}
export default Nav;
