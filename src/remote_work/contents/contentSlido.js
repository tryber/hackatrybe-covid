const content = `<h2 id="content-slido-id">O QUE É SLI.DO</h2>

Sli.do é uma plataforma de perguntas, respostas e pesquisas. Ele permite uma interação entre professores e estudantes, tirando assim o máximo proveito das reuniões, aulas e eventos.

O Sli.do é uma ferramenta muito legal: ela permite formular perguntas que são colocadas de maneira sequencial numa lista para o professor. É interessante também que nele existe uma votação via likes possibilitando assim as perguntas que os participantes julgarem mais interessantes "furem a fila". 

Há também uma funcionalidade de pesquisas. O professor ou responsável pelo chat cria uma pesquisa e os participantes reagem via votação, acompanhando tudo em tempo real, visualizando assim o gráfico se mexendo na tela com sua porcentagem.

![Sli.do ferramenta de perguntas e pesquisa](/assets/images/first-slido.gif)

<h3 id="tutorial-slido-id">Como utilizar o Sli.do como estudante</h3>

1. Acesse o site https://www.sli.do/ 
2. Insira um código para entrar na sala.
3. Faça perguntas e interaja.

![Sli.do interação com perguntas](/assets/images/second-slido.gif)
`

const briefing = `## Sli.do

  Ferramentas, tutorial e suas funcionalidades. `

const obj = {
  title: 'A ferramenta Sli.do',
  type: 'Estudantes',
  briefing, 
  content,
  nav: [
    { link: 'O que é Sli.do', href: 'content-slido-id' }, 
    { link: 'Como ultilizar O Sli.do', href: 'tutorial-slido-id' }
  ],
}

export default obj;
