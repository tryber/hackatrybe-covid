const content = `# ADICIONE AQUI O SEU MD DO CONTEUDO COMPLETO`

const briefing = `# ADICIONE AQUI A DESCRIÇÃO E TITLE DO CONTEUDO, h1, p `

const obj = {
  title: 'Hábitos',// title Conteudo
  type: 'Aluno', // tipo conteudo (Professor, Aluno, Ferramenta)
  briefing, 
  content,
  nav: [
    { link: 'Ambientação local', href: 'ambiente-local-id' }, // id para navegação
    { link: 'Ambientação local', href: 'ambiente-local-id' } // id para navegação
  ],
}

export default obj;
