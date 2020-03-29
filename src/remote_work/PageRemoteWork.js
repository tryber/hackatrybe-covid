import React from 'react';
import CardType from './CardType';

function PageRemoteWork() {
  return (
    <div className="RemoteWork">
      <CardType item={{ type: 'Professores', text: 'TEXTINHO SHOW DE BOLA' }} />
      <CardType item={{ type: 'Aluno', text: 'TEXTINHO SHOW DE BOLA' }} />
      <CardType item={{ type: 'Ferramentas', text: 'TEXTINHO SHOW DE BOLA' }} />
    </div>
  );
}

export default PageRemoteWork;
