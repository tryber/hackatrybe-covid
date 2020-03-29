const content = `![Logo Google Classroom](markdown/images/classroom.png)

O Google Classroom é um sistema de gerenciamento de conteúdo para escolas que procuram simplificar a criação, a distribuição e a avaliação de trabalhos. E em um momento de isolamente social como o que estamos agora pode ser um boa opção para instituições de ensino. Caso esteja sendo aplicado no lugar em que estuda aqui vão algumas dicas de como utiliza-lo bem.

<h2 id="entrar-turma-id">Entrando em uma turma</h2>

Antes de tudo é preciso saber que o Classroom está disponível tanto para iOS, quanto para Android, como também pode ser acessado através de seu computador. Sabendo disso a primeira etapa para entrar na turma é possuir uma conta Google, na sequência clicar "+" e então clicar em "Participar da turma", um texto com uma área para digitação como o da imagem abaixo será exibido, deve-se então inserir o código da turma informado pelo professor.

![Input do código da turma](markdown/images/participar-turma.png)

Pronto, agora você já está inscrito na turma, lembre-se que é possível fazer parte de mais de uma turma. Sendo que sempre que entrar na página de curso terá acesso a três abas diferentes, _mural_, _ativades_ e _pessoas_.

### Mural

O mural é basicamente a página principal da turma, lá você poderá ver todo o conteúdo disponibilizado pelo professor e também todas as discussões feitas em ordem cronológica.

### Atividades

Essa área contém todas as atividades passadas pelo professor, através dela você poderá acessar os exercícios e trabalhos, e também as atividades corrigadas que forem devolvidas pelo professor.

### Pessoas

Nessa aba você encontrará todos os participantes da turma, tanto os alunos quanto o professor (ou professores).

<h2 id="boas-praticas-id">Boas práticas</h2>

O Classroom é uma ferramenta muito poderosa e quando bem utilizada resulta em muito aprendizado, para isso seguem algumas dicas de uso:

- Sempre que um discussão surgir e tiver interesse de contribuir, entre na discussão e a responda por li, não crie uma nova discussão como resposta.
- Fique atento aos prazos das atividades, o Classroom sempre lhe enviará um email avisando de sua tarefa 24hrs antes do prazdo de entrega.
- Mantenha a organização e os conteúdos sempre em dia, dessa forma você nunca irá se perder na plataforma.

Para acessar o Google Classroom clique [aqui](https://classroom.google.com/).`

const briefing = `## GOOGLE CLASSROOM

O Google Classroom é uma poderosa ferramente de ensino, caso esteja sendo aplicado no lugar em que estuda aqui vão algumas dicas de como utiliza-lo bem.
`

const obj = {
  title: 'GOOGLE CLASSROOM',
  type: 'Estudante',
  briefing, 
  content,
  nav: [
    { link: 'Entrando em uma turma', href: 'entrar-turma-id' },
    { link: 'Boas práticas', href: 'boas-praticas-id' }
  ],
}

export default obj;
