import React from 'react';
import CardType from './CardType';
import './PageRemote.css';

function PageRemoteWork() {
  return (
    <div className="Remote-Work">
      <div className="header">
        <h1>Trabalho e Ensino Remoto</h1>
        <p>Dicas para adaptação ao trabalho remoto e as melhores práticas para o ensino à distância.</p>
      </div>
      <div className="content">
        <h2>Conteúdos</h2>
      <div className="collection-card-type">
      <CardType item={{ type: 'Ferramentas', text: 'Como configurar as ferramentas de trabalho remoto, boas práticas e mais...' }} />
      <CardType item={{ type: 'Professores', text: 'Como dar aulas por meio das plataformas digitais, dicas de produtividade e mais...' }} />
      <CardType item={{ type: 'Estudantes', text: 'Dicas de produtividade, técnicas de estudo e mais...' }} />
      </div>
      </div>
    </div>
  );
}

export default PageRemoteWork;
