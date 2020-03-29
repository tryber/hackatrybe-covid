import React from 'react';
import CardType from './CardType';

function PageRemoteWork() {
  return (
    <div className="RemoteWork">
      <CardType item={{ type: 'Professor', text: 'Seção para os professores' }} />
      <CardType item={{ type: 'Estudante', text: 'Seção para os alunos' }} />
      <CardType item={{ type: 'Ferramenta', text: 'Ferramentas que usará' }} />
    </div>
  );
}

export default PageRemoteWork;
