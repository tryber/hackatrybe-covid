import React from 'react';
// import { Link } from 'react-router-dom';
import NomesLista from './nomes';
import './SobreNos.css';
import Group64 from './Group64.png';

function AboutUs() {
  return (
    <div className="about">
      <span className="logo">Central de Informações<b> - COVID-19</b></span>
      <div className="background-header">
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
        <ul className="tryber"><a className="tryber" href="https://www.linkedin.com/in/albertosca/"><img className="trybersImg" src="/assets/images/about-us/Alberto.jpg" alt="Alberto Albuquerque pic" /><br />Alberto Albuquerque</a></ul>
        <ul className="tryber"><a className="tryber" href="https://www.linkedin.com/in/joaopauloaramuni/"><img className="trybersImg" src="/assets/images/about-us/Aramuni.jpg" alt="João Paulo Aramuni pic" /><br />Aramuni</a></ul>
        <ul className="tryber"><a className="tryber" href="https://www.linkedin.com/in/betinaribeiro/"><img className="trybersImg" src="/assets/images/about-us/Betina.jpg" alt="Betina Tavares pic"/><br />Betina Tavares</a></ul>
        <ul className="tryber"><a className="tryber" href="https://www.linkedin.com/in/brunogomesmedeiros/"><img className="trybersImg" src="/assets/images/about-us/Bruninho.jpg" alt="Bruno Gomes pic" /><br />Bruno Gomes</a></ul>
        <ul className="tryber"><a className="tryber" href="https://www.linkedin.com/in/caironoleto/"><img className="trybersImg" src="/assets/images/about-us/Cairo.jpg" alt="Cairo Noleto pic" /><br />Cairo Noleto</a></ul>
        <ul className="tryber"><a className="tryber" href="https://www.linkedin.com/in/lucas-cassiano-ferraz-paolillo/"><img className="trybersImg" src="/assets/images/about-us/LucasCassiano.jpg" alt="Lucas Ferraz pic" /><br />Lucas Ferraz</a></ul>
        <ul className="tryber"><a className="tryber" href="https://www.linkedin.com/in/matheusgoyas/"><img className="trybersImg" src="/assets/images/about-us/MatheusGoyas.jpg" alt="Matheus Goyas pic" /><br />Matheus Goyas</a></ul>
        <ul className="tryber"><a className="tryber" href="https://www.linkedin.com/in/t%C3%A1ssio-mendes-145a7366/"><img className="trybersImg" src="/assets/images/about-us/TassioMendes.jpg" alt="Tássio Mendes pic" /><br />Tássio Mendes</a></ul>
        <ul className="tryber"><a className="tryber" href="https://www.linkedin.com/in/tulio-starling/"><img className="trybersImg" src="/assets/images/about-us/TulioStarling.jpg" alt="Túlio Starling pic" /><br />Túlio Starling</a></ul>
        <ul className="tryber"><a className="tryber" href="https://www.linkedin.com/in/victor-caciquinho/"><img className="trybersImg" src="/assets/images/about-us/Cacique.jpg" alt="Victor Caciquinho pic" /><br />Victor Caciquinho</a></ul>
      </li>
      </div>
      </div>
      <div className="background-4">
        <img className="trybe-img" src={Group64} alt="hackatrye" />
      </div>
    </div>
  );
}

export default AboutUs;
