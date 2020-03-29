const content = `# ZOOM

<h2 id="audio-imagem-id"> Audio, Imagem e Interação em 1 só lugar </h2>

!(Primeiro-ministro britânico usando o Zoom)[https://e3.365dm.com/20/03/2048x1152/skynews-zoom-cabinet-coronavirus_4955732.jpg]

Graças a ferramentas como o Zoom, ampliamos a sensação que estamos de fatos conectados nesse momento de quarentena. Isso se deve a essa poderosa plataforma, que consegue consegue ser utilizada simultaneamente por 170 pessoas ou mais sem travamento, permitindo a transmissão de conteúdo de forma fluída, com sem ou quase nenhuma interferência.

<h2 id="momentos-id"> Momentos com todo mundo junto </h2>

Se fosse definir a ferramenta essencial para o ensino remoto, seria o Zoom. É claro que existem outras ferramentas que trabalham juntas, mas o Zoom é o que da vida a tudo. É onde nós, como estudantes, nos vemos e nos ouvimos, é onde nos reunimos com a facilitação, enfim, é a plataforma que serve como sala de aula para nós. 
 
<h2 id="compartilhamento-id"> Compartilhamento de tela </h2>

Talvez a melhor funcionalidade do Zoom seja o compartilhamento de tela, que permite não só a aula com o professor, mas também o que muitos estudantes fazem: se juntar para resolver problemas e estudar de forma extremamente fácil, rápida, dinâmica e produtiva. 

É extremamente comum estudantes fazerem "live code review" de seus projetos pessoais ou do curso através dessa funcionalidade.
​
<h2 id="utilizando-zoom-id"> Utilizando o Zoom </h2>
​
Agora que você já sabe algumas funcionalidades do Zoom, veremos como utiliza-lo corretamente:
- Faça o cadastro na plataforma (https://zoom.us/pt-pt/freesignup.html),
- Vá na seção **"Perfil"** e personalize o seu nome da seguinte forma **"Nome Sobrenome - Turma X"**
- Escolha uma boa foto de Perfil, aquela que você ta bem bonitão ou bonitona e defina-a com **"alterar foto"**.

<h2 id="download-id"> Download </h2>

O Zoom pode ser encontrado [neste link](https://zoom.us/download) e possui suporte para diversos sistemas operacionais (Windows, MacOS, Ubuntu, Devian, Mint, Oracle Linux, CentOS RedHat, Fedora, OpenSUSE, Arch, entre outros)`

const briefing = `## ZOOM - Uma sala de aula completa

Se até o 1º ministro britânico utiliza, você vai querer utilizar tambem!`

const obj = {
  title: 'Zoom',
  type: 'Ferramenta', // tipo conteudo(Professor, aluno, ferramenta)
  briefing, 
  content,
  nav: [
    { link: 'Audio, Imagem e Interação', href: 'audio-imagem-id' }, // id para navegação
    { link: 'Momentos Compartilhados', href: 'momentos-id' }, // id para navegação
    { link: 'Compartilhamendo de tela', href: 'compartilhamento-id' }, // id para navegação
    { link: 'Configurando o seu Zoom', href: 'utilizando-zoom-id' }, // id para navegação
    { link: 'Download da Plataforma', href: 'download-id' }, // id para navegação
  ],
}

export default obj;
