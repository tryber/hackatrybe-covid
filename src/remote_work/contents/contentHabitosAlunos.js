const content = `# HÁBITOS PARA UM BOM DESEMPENHO REMOTO

Nesse momento de isolamento social, muitas pessoas precisarão adaptar o seu estilo de vida. Para estudar e trabalhar em casa é preciso mais do que força de vontade, sendo necessário disciplina e organização, algumas das etapas que abordaremos adiante.

<h2 id="gerencie-bem-id">Gerencie bem o seu tempo </h2>

A organização do tempo é crucial para tudo que intentamos fazer. Separar momentos de trabalho e estudo dentro de casa é um dos principais pontos para conseguir desenvolver bem suas tarefas. Antes de tudo precisas-se definir os momentos de estudo.

Ter esses momentos bem delimitados é importante para criar uma rotina. Um senso de  responsabilidade com suas tarefas. Adotar um método para planejar seu dia deve ser uma das prioridades, anotando a sua rotina ou elaborando uma lista de tarefas por exemplo.

## Conscientização da Família

Um dos aspectos mais difíceis de lidar quando se trabalha em casa é saber delimitar o tempo de interação com a família. Deixar claro aos familiares ou amigos do convívio local, que o momento é de estudo e que precisa se dedicar é importante. É preciso estabelecer as métricas com a família no que diz respeito a estudar em casa, de modo a evitar que seus momentos de foco sejam interrompidos.

<h2 id="ambiente-local-id">Ambientação local </h2>

O processo de adaptação para um bom trabalho remoto requer acima de tudo um ambiente preparado. Para isso certifique-se que está em um local confortável, onde não será interrompido e que tenha uma boa conexão à rede. 

É importante que sua mesa esteja sempre limpa e organizada, além disso vale ressaltar que uma boa postura é fundamental para sua produtividade. Lembre-se esse é seu espaço exclusivo de estudo, não o misture com outras atividades, fazendo isso seu cérebro irá entender que estar naquele ambiente significa focar em suas tarefas.

## Mantenha o foco 

Pra muita gente a parte mais complexa do _home office_ é manter o foco. As distrações no contexto doméstico são inúmeras: tarefas do lar, filhos, animais de estimação e os grandes vilões, as redes sociais.

Estabelecer um limite para tais situações é crucial para um bom desenvolvimento das tarefas propostas. _Foco é dizer não_, permitir se envolver nessas distrações por muito tempo pode gerar frustração e uma sensação de tarefa não cumprida. 

Portanto tome conhecimento do que pode atrapalhar o seu bom desenvolvimento no trabalho remoto, e certifique-se que será evitado.

## Os cuidados de cada dia 

Em meio a tais atitudes necessárias  para o sucesso neste empreendimento é indispensável falar sobre os cuidados inerentes à sua saúde. Alimentar-se de forma adequada, se hidratar e tomar sol, ter uma boa noite de sono, descansar.

Uma boa dica para melhorar suas noite de sono é evitar o uso de eletrônicos por cerca de uma hora antes de se deitar, assim descansará da luz azul que a tela emite, facilitando a vinda do sono. 

Outra prática que te ajudará é a meditação, pois ajuda no bem-estar físico e emocional, reduzindo o estresse, a dor e a ansiedade. Podendo ser praticada em qualquer horário do dia, preparando o seu corpo para um dia produtivo ou para uma boa noite de sono relaxante.

## Recompense-se

Atribuir momentos de alegria e satisfação é parte de todo o processo. Permitir divertir e alegrar-se depois de um dia ou uma semana produtiva te fará muito bem. Eventos simples como, tomar um banho demorado, assistir um episódio de sua série favorita ou jogar uma partida com os amigos te fará muito bem. Pequenas recompensas geram grandes alegrias, reforce seus hobbies. Aprenda a arte de reconhecer o bom trabalho e de desfrutá-lo.
`;

const briefing = `## Bons hábitos para estudar remotamente

Nesse momento de isolamento social, muitas pessoas precisarão adaptar o seu estilo de vida.`;

const obj = {
  title: 'Hábitos',
  type: 'Estudantes',
  briefing,
  content,
  nav: [
    { link: 'Gerencie bem o seu tempo', href: 'gerencie-bem-id' },
    { link: 'Ambientação local', href: 'ambiente-local-id' }
  ],
};

export default obj;
