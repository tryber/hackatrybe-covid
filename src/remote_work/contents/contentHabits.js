const content = `![Mesa com computador e cadeira](imgs/first-habits.jpg)

Nesse momento de isolamento social, muitas pessoas precisarão adaptar o seu estilo de vida. Para estudar e trabalhar em casa, é preciso mais  do  que força de vontade, sendo necessário ter disciplina e organização, alguns dos pontos que abordaremos adiante.

<h2 id="gerenciar-tempo-id">Gerencie bem o seu tempo</h2>

A organização do tempo é crucial para tudo que fazemos. Separar momentos de trabalho e estudo dentro de casa é um dos principais pontos para conseguir desenvolver bem suas tarefas. Antes de tudo, é preciso definir os momentos de estudo.

Ter esses momentos bem delimitados é importante para criar uma rotina e um senso de  responsabilidade com suas tarefas. Adotar um método para planejar seu dia deve ser uma das prioridades, anotando a sua rotina ou elaborando uma lista de tarefas, por exemplo.

<h2 id="conscientizacao-familia-id">Conscientização da Família</h2>

Um dos aspectos mais difíceis de lidar quando se trabalha em casa é saber delimitar o tempo de interação com a família. Deixar claro aos familiares ou amigos do convívio local que o momento é de estudo e se dedicar é importante. É preciso estabelecer limites com a família no que diz respeito a estudar em casa, de modo a evitar que seus momentos de foco sejam interrompidos.

<h2 id="ambiente-local-id">Ambientação local</h2>

O processo de adaptação para um bom trabalho remoto requer, acima de tudo, um ambiente preparado. Para isso certifique-se de que está em um local confortável, onde não será interrompido e que tenha uma boa conexão à internet. 

É importante manter seu local de trabalho sempre limpo e organizado. Além disso, vale ressaltar que uma boa postura é fundamental para sua produtividade. Lembre-se que esse é seu espaço exclusivo de estudo, não o misture com outras atividades. Fazendo isso seu cérebro vai entender que estar naquele ambiente significa focar em suas tarefas.

<h2 id="mantenha-foco-id">Mantenha o foco</h2>

Para muita gente, a parte mais complexa do _home office_ é manter o foco. As distrações no contexto doméstico são inúmeras: tarefas do lar, filhos, animais de estimação e os grandes vilões: as redes sociais.

Estabelecer um limite para tais situações é crucial para um bom desenvolvimento das tarefas propostas. _Foco é dizer não_, permitir se envolver nessas distrações por muito tempo pode gerar frustração e uma sensação de tarefa não cumprida. 

Portanto, tome conhecimento do que pode atrapalhar o seu bom desenvolvimento no trabalho remoto e certifique-se de que será evitado.

<h2 id="cuidados-id">Os cuidados de cada dia</h2>

Em meio a tais atitudes necessárias  para o sucesso neste modo de trabalho e estudos, é indispensável falar sobre os cuidados relacionados à sua saúde, tais como alimentar-se de forma adequada, se hidratar e tomar sol, ter uma boa noite de sono e descansar.

Uma boa dica para melhorar suas noites de sono é evitar o uso de eletrônicos por cerca de uma hora antes de se deitar, assim descansará da luz azul que a tela emite, facilitando a chegada do sono e melhorando sua qualidade. 

Outra prática que te ajudará é a meditação, pois ajuda no bem-estar físico e emocional, reduzindo o estresse, a dor e a ansiedade. Pode ser praticada em qualquer horário do dia, preparando o seu corpo para um dia produtivo ou para uma boa noite de sono relaxante.

![Mulher meditando](imgs/second-habits.jpg)

<h2 id="recompensa-id">Recompense-se</h2>

Atribuir momentos de alegria e satisfação é parte de todo o processo. Permitir divertir e alegrar-se depois de um dia ou uma semana produtiva te fará muito bem. Eventos simples como tomar um banho demorado, assistir a um episódio de sua série favorita ou jogar uma partida com os amigos são ótimos exemplos. Pequenas recompensas geram grandes alegrias, reforce seus hobbies. Aprenda a arte de reconhecer o bom trabalho e de desfrutá-lo.
`

const briefing = `## HÁBITOS PARA UM BOM DESEMPENHO REMOTO

Nesse momento de isolamento social, muitas pessoas precisarão adaptar o seu estilo de vida. Para estudar e trabalhar em casa, é preciso mais  do  que força de vontade, sendo necessário ter disciplina e organização, alguns dos pontos que abordaremos adiante.
`

const obj = {
  title: 'HÁBITOS PARA UM BOM DESEMPENHO REMOTO',// title COnteudo
  type: 'Estudante', // tipo conteudo(Professor, estudante, ferramenta)
  briefing, 
  content,
  nav: [
    { link: 'Gerencie bem o seu tempo', href: 'gerenciar-tempo-id' }, // id para navegação
    { link: 'Conscientização da Família', href: 'conscientizacao-familia-id'},
    { link: 'Ambientação local', href: 'ambiente-local-id' }, // id para navegação
    { link: 'Mantenha o foco', href: 'mantenha-foco-id' },
    { link: 'Os cuidados de cada dia', href: 'cuidados-id' },
    { link: 'Recompense-se', href: 'recompensa-id' }
  ],
}

export default obj;
