import React from 'react';
import CardType from './CardType';
import './PageRemote.css';

function PageRemoteWork() {
  return (
    <div className="Remote-Work">
      <div className="header">
        <h1>Trabalho e Ensino Remoto</h1>
        <p>Dicas para adaptação a vida remota, boas praticas para trabalho e para o ensino a distancia!</p>
      </div>
      <div className="collection-card-type">
      <CardType item={{ type: 'Professor', text: 'Seção para os professores' }} />
      <CardType item={{ type: 'Aluno', text: 'Seção para os alunos' }} />
      <CardType item={{ type: 'Ferramenta', text: 'Ferramentas que usará' }} />
      </div>
    </div>
  );
}

export default PageRemoteWork;
