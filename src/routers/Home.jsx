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
                    <p> A ideia central é simples, mas impactante: médicos podem fornecer aos seus pacientes um link personalizado contendo informações sobre horários e tipos de medicamentos prescritos. Essa abordagem vai além da tradicional receita em papel, proporcionando uma maneira mais eficiente e interativa de gerenciar a saúde. </p>
                </div>
                <hr />
                <div>
                    <h1>O que ela fará</h1>
                    <p> A nossa solução melhorará A qualidade de vida dos nossos clientes/pacientes, fazenndo com que haja uma melhora em relação a organização e cuidado dos medicamentos </p>
                </div>
                <hr />
                <div>
                    <h1>Como funcionará</h1>
                    <p>Ao final de uma consulta ou da casa do paciente,  o médico pode gerar uma prescrição digital personalizada para o paciente. Essa prescrição é então enviada eletronicamente por meio de um link seguro. Ao abrir o link, o paciente tem acesso a um painel intuitivo que exibe informações detalhadas sobre os medicamentos prescritos, incluindo horários específicos para cada dose.  optio quis magnam, laudantium illo adipisci odit ex molestiae labore accusantium. Reiciendis.</p>
                </div>
            </article>
            <div className='mainTitle'>
                <h1>MED</h1>
            </div>
            <article className='smallTitle'>
                <div>
                    <h4>O nome da nossa solução é MED, ela irá ajudar muito o cliente, sem precisar ficar anotando no papel os horários e tais remédios que irá ingerir. Nossa solução visa a despreocupação do paciente, ciente de que o alarme irá tocar e irá aparecer o nome do remédio que ele vai tomar </h4>
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
                    <h2>Otimização</h2>
                    <p>Prescrição digital personalizada: avanço tecnológico na gestão de tratamentos médicos.</p>
                </div>
            </div>
            <div className='card2'>
                <img src="./src/assets/remedios3.jpg" alt="Dont forget" />
                <div>
                    <h1>02</h1>
                    <h2>Comunicação.</h2>
                    <p>Prescrição digital: simplifica administração, fortalece comunicação, transforma assistência à saúde. </p>
                </div>
            </div>
            <div className='card3'>
                <img src="./src/assets/remedios4.jpg" alt="Dont forget" />
                <div>
                    <h1>03</h1>
                    <h2>Tratativa</h2>
                    <p>Doença do esquecimento, instruções confusas: pacientes. Monitoramento, comunicação eficiente: desafios para médicos. </p>
                </div>
            </div>
        </section>
    </>
    )
};

export default UserPanel;
