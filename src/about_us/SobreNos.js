import React from 'react';
// import { Link } from 'react-router-dom';
import NomesLista from './nomes';
import './SobreNos.css';

function AboutUs() {
  return (
    <div className="about">
      <div className="background-header">
      <span className="logo">Ajuda<b>BH</b></span>
      </div>
      {/* <Link to="/">
         <button className="close-about"></button>
      </Link> */}
      <div className="background-body">
      <div className="background-1">
      <p className="about-title">Quem somos nós</p>
      <p className="about-p">Ante a pandemia do Sars-CoV2, ou novo corona vírus, um grupo de entusiastas da tecnologia empunhou seus teclados em união para auxiliar a população
       de várias maneiras possíveis, buscando fornecer informações atualizadas e seguras, dicas de segurança e saúde, além de instruções de como se adaptar ao estudo remoto.
        Graças à nossa união e ao apoio da equipe da Trybe, conseguimos tornar essa ideia realidade.</p>
      <p className="about-p">Somos Trybers!</p>
      </div>
      <div className="background-2">
      <br />
      <h2 className="about-title about-title-fix">Nossos Trybers</h2>
      <br />
      <NomesLista />
      </div>
      <div className="background-3">
      <br />
      <br />
      <h2 className="about-title">Nossos Orientadores</h2>
      <br />
      <li className="trybers-list">
        <ul className="tryber"><a className="tryber" href="https://www.linkedin.com/in/albertosca/"><img className="trybersImg" src="https://media-exp1.licdn.com/dms/image/C4E03AQExyuv0PydqbQ/profile-displayphoto-shrink_800_800/0?e=1586390400&v=beta&t=DkCdRx39SgokOk-q2pUdoGuRr1cwddGnylig9Ja4CUI" alt="Alberto Albuquerque pic" /><br />Alberto Albuquerque</a></ul>
        <ul className="tryber"><a className="tryber" href="https://www.linkedin.com/in/betinaribeiro/"><img className="trybersImg" src="https://media-exp1.licdn.com/dms/image/C5603AQEsLx1SIdAisA/profile-displayphoto-shrink_800_800/0?e=1586390400&v=beta&t=nhmGa3rs1twoefr7GnuutSdTsAcPRJqAkmPTFRFOaRY" alt="Betina Tavares"/><br />Betina Tavares</a></ul>
        <ul className="tryber"><a className="tryber" href="https://www.linkedin.com/in/brunogomesmedeiros/"><img className="trybersImg" src="https://media-exp1.licdn.com/dms/image/C4D03AQHua7EKHLu9vQ/profile-displayphoto-shrink_200_200/0?e=1586390400&v=beta&t=NGJ2c-uIYfdllYD99DOzQVhGd7xyVxcW4d62GbzT9Gk" alt="Bruno Gomes pic" /><br />Bruno Gomes</a></ul>
        <ul className="tryber"><a className="tryber" href="https://www.linkedin.com/in/lucas-cassiano-ferraz-paolillo/"><img className="trybersImg" src="https://media-exp1.licdn.com/dms/image/C4E03AQG83cY-t41h1g/profile-displayphoto-shrink_800_800/0?e=1586390400&v=beta&t=QYjSel2orYbwtyeJz8Q4ZqUGt-XdLOaXTPDYSFZYqsc" alt="Lucas Ferraz pic" /><br />Lucas Ferraz</a></ul>
        <ul className="tryber"><a className="tryber" href="https://www.linkedin.com/in/matheusgoyas/"><img className="trybersImg" src="https://media-exp1.licdn.com/dms/image/C4E03AQGXNjWcxwKoSQ/profile-displayphoto-shrink_800_800/0?e=1586390400&v=beta&t=y7DV2wpl3sOS1C2_0jIinXTZRo9fOW3zffWapR03plA" alt="Matheus Goyas" /><br />Matheus Goyas</a></ul>
        <ul className="tryber"><a className="tryber" href="https://www.linkedin.com/in/t%C3%A1ssio-mendes-145a7366/"><img className="trybersImg" src=" https://media-exp1.licdn.com/dms/image/C4D03AQFAlfv3X9GoUQ/profile-displayphoto-shrink_800_800/0?e=1586390400&v=beta&t=h8HNwY74hjyjTudQlcgIaz_bI83VB0Q1iwY3NbweWdc" alt="Tássio Mendes" /><br />Tássio Mendes</a></ul>
      </li>
      </div>
      </div>
      <div className="background-4">
        <span className="hacka-logo"><i>Hacka</i></span>
        <img src="https://i.ibb.co/YB53DYR/TRYBE-COLOR-LIGHT-BG-1.png"></img>
      </div>
    </div>
  );
}

export default AboutUs;
