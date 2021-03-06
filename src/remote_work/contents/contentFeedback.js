const content = `# ESTABELECENDO UMA CULTURA DE FEEDBACK

<h2 id="oque-feedback-id">Mas afinal, o que é “feedback”?</h2>

_Feedback_ é uma palavra de origem inglesa que significa “realimentação”. Trazendo para o contexto da educação, podemos entender como um conjunto de sugestões e avaliações que auxiliam na melhoria da **qualidade do ensino**. 

Para citarmos um exemplo, após uma aula alunos enviam sugestões, dúvidas, comentários sobre o que foi bom ou o que não entenderam bem. Dessa forma, professores e professoras podem aprimorar sua próxima aula baseando-se nos _feedbacks_ recebidos. 

Professores também podem e devem oferecer _feedback_ aos estudantes, e estes podem oferecer feedbacks uns aos outros. Dessa forma, será dado um primeiro passo para estabelecermos o que podemos chamar de **cultura de _feedback_**, que é quando todos os envolvidos compreendem a importância e utilizam o _feedback_ no dia-a-dia.

<h2 id="porque-feedback-id">Por quê feedback é importante?</h2>

Na transição para uma aula ao vivo _on-line_, é importante que professores e estudantes se adaptem ao novo contexto. Para isso acontecer, **receber e dar _feedback_ é essencial**. Só assim, poderão se adaptar mais rapidamente e criar uma experiência de aprendizado eficiente para todos.

Numa aula presencial, o professor recebe _feedback_ imediato dos alunos. Por exemplo, ao perceber que estudantes estão com _"cara de quem não tô entendendo nada”_, pode-se explicar de uma nova forma ou perguntar por dúvidas. Essa situação não é muito viável numa aula _on-line_, porém existem outras **possibilidades de _feedback_** para uma sala de aula virtual.

Uma possibilidade interessante é utilizar uma **ferramenta de _feedback_ anônimo**, como preencher um formulário _on-line_. Isso permite a um aluno mais tímido se sentir à vontade para contribuir. Outra possibilidade, não anônima, é abrir momentos para que os alunos e alunas comentem ao final de um tópico, durante uma aula, suas impressões sobre o andamento da aula até aquele ponto. 

<h2 id="como-dar-feedback-id">Como dar um bom Feedback?</h2>

A primeira preocupação ao oferecer um bom _feedback_ é ser **construtivo**. O que isso significa? A comunicação não deve vir em tom de crítica ou xingamento, mas de sugestão, de maneira pontual, sempre baseada na própria experiência. 

Uma boa forma é seguir os passos da **[_comunicação não-violenta_](https://papodehomem.com.br/comunicacao-nao-violenta-o-que-e-e-como-praticar/)**:

1. Faça uma observação sobre o fato ocorrido;

2. Diga como você se sentiu diante do fato;

3. Mencione qual sua necessidade não atendida;
4. Faça um pedido ou sugestão;
	
O _feedback_ é importante tanto para quem ensina quanto para quem aprende. Professores poderão melhorar as aulas, estudantes poderão interagir de forma mais eficiente e o relacionamento interpessoal entre os alunos poderá se beneficiar de uma cultura de _feedback_ onde o objetivo principal seja o aprendizado.

<h2 id="como-receber-feedback-id">Como receber um Feedback?</h2>

Uma boa forma de receber _feedback on-line_ é utilizar o [**Google Forms**](https://www.appgeek.com.br/como-usar-google-forms/). Estudantes poderão preencher formulários de _feedback_ anônimos após cada aula. Algumas perguntas que poderão ser utilizadas no formulário são:

* Como foi sua experiência de aprendizado hoje?
* Qual nota de 1 a 10 você daria para aula de hoje?
* Qual sugestão você deixaria para o(a) professor(a)?

O importante aqui é elaborar um formulário que mais se adeque à aula ofertada.

Uma outra forma de professores receberem _feedback_ é através de **pequenas avaliações**. Ao final de uma aula, ou de um ciclo de conteúdo, por exemplo, elas poderão servir de “termômetro” para saber se estudantes estão compreendendo o conteúdo e se as aulas estão sendo eficientes.

Por fim, é importante que os educadores, ao receberem os _feedbacks_, possam organizá-los e planejar **melhorias para as aulas**. Uma boa prática, neste caso, é não deixar _feedbacks_ se acumularem, tanto quanto possível. É interessante colocar as melhorias em prática de uma aula para a outra. Melhorando assim a experiência de aprendizagem para todos.
`;

const briefing = `## Cultivando a cultura de feedback

Como fazer os estudantes darem feedbacks que te ajudem a melhorar sua aula.`;

const obj = {
  title: 'Falando sobre feedbacks',
  type: 'Professores', 
  briefing, 
  content,
  nav: [
    { link: 'Mas afinal, o que é “feedback”', href: 'oque-feedback-id' }, 
    { link: 'Por quê feedback é importante?', href: 'porque-feedback-id' }, 
    { link: 'Como dar um bom Feedback?', href: 'como-dar-feedback-id' },
    { link: 'Como receber um Feedback?', href: 'como-receber-feedback-id' } 
  ],
}

export default obj;
