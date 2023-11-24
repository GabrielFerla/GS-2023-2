import React from 'react';
import '../css/home.css';

const UserPanel = ({ user }) => {

  function logout() {
      sessionStorage.clear();
      window.location.reload();
  };

  return (
    <>
        <section className='container-grid-1'>
            
            <article className='mainImg'>
                <img src="./src/assets/remedio1.jpg" alt="Dont forget" />
            </article>
            <article className='sideText'>
                <div>
                    <p> Bem vindo: {user.nome} , {user.email} </p>
                    <h1>O que é a nossa solução</h1>
                    <p>Lorem ipsutesteconsectetur adipisicing elit. Nulla enim sed cupiditate consequuntur dolorum culpa praesentium veritatis dolor optio quis magnam, laudantium illo adipisci odit ex molestiae labore accusantium. Reiciendis.</p>
                </div>
                <hr />
                <div>
                    <h1>O que ela fará</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim sed cupiditate consequuntur dolorum culpa praesentium veritatis dolor optio quis magnam, laudantium illo adipisci odit ex molestiae labore accusantium. Reiciendis.</p>
                </div>
                <hr />
                <div>
                    <h1>Como funcionará</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla enim sed cupiditate consequuntur dolorum culpa praesentium veritatis dolor optio quis magnam, laudantium illo adipisci odit ex molestiae labore accusantium. Reiciendis.</p>
                </div>
            </article>
            <div className='mainTitle'>
                <h1>Nome da Solução</h1>
            </div>
            <article className='smallTitle'>
                <div>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque nesciunt nobis at officia libero nulla maxime beatae architecto, iusto ab vel perferendis aliquid velit reiciendis. Quisquam, nulla? Consequatur, fuga magni?</h4>
                </div>
            </article>

            
            <button className='btn'>Mais Informações</button>
        </section>
        <section className='container-grid-2'>
            <div className='secondTitle'>
                <h1>Vantagens</h1>
            </div>
            <div className='logoutBtn'>
                <button onClick={logout}><h2>Logout</h2></button>
            </div>
            <div className='card1'>
                <img src="./src/assets/remedios2.jpg" alt="Dont forget" />
                <div>
                    <h1>01</h1>
                    <h2>Lorem ipsum.</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className='card2'>
                <img src="./src/assets/remedios3.jpg" alt="Dont forget" />
                <div>
                    <h1>02</h1>
                    <h2>Lorem ipsum.</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className='card3'>
                <img src="./src/assets/remedios4.jpg" alt="Dont forget" />
                <div>
                    <h1>03</h1>
                    <h2>Lorem ipsum.</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </section>
    </>
    )
};

export default UserPanel;
