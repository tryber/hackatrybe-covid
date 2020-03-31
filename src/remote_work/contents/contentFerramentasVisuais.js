const content = `# FERRAMENTAS VISUAIS

Sem dúvidas que as ferramentas visuais são grandes facilitadoras para educadores. Você, como docente, pode sentir muita falta de um projetor, quadro negro e giz para ministrar uma boa aula, e realmente as ferramentas visuais podem ajudar muito na transmissão de conteúdo. Apesar de não ser possível usufruir desses utensílios físicos durante uma aula virtual, existem algumas boas opções de como interagir visualmente com os estudantes, mesmo todos estando na frente do computador.

<h2 id="go-conqr-id"><a href="https://www.goconqr.com/pt-BR">Go Conqr</a></h2>

É um conjunto de ferramentas para construir conhecimento. O registro na plataforma é gratuito e nela você pode criar mapas mentais, _quizzes_ e _slides_. Além disso, o Go Conqr também possui uma biblioteca repleta de recursos criados por outros usuários.

<h2 id="drawio-id"><a href="https://app.diagrams.net/">Draw.io</a></h2>

Um criador de diagramas totalmente gratuito construído sobre o _Google Drive_.

<h2 id="youtube-id"><a href="https://www.youtube.com/">YouTube</a></h2>

O tão conhecido _YouTube_ pode ser uma ferramenta muito interessante para ajudar no ensino e entreter os estudantes. Neste local de compartilhamento de vídeos gratuito você muito provavelmente encontrará algum material que possa auxiliar durante a aula.
`;

const briefing = `## Ferramentas para visualização digital

Conhecendo as ferramentas que lhe ajudarão a enfrentar o desafio digital`;

const obj = {
  title: 'Ferramentas Visuais',
  type: 'Professores', 
  briefing, 
  content,
  nav: [
    { link: 'Go Conqr', href: 'go-conqr-id' }, 
    { link: 'Draw.io', href: 'drawio-id' }, 
    { link: 'YouTube', href: 'youtube-id' }, 
  ],
}

export default obj;
