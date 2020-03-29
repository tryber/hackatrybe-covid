const content = `# DINÂMICAS DE INTERAÇÃO

<h2 id="distancia-transacional-id">Distância transacional</h2>

No contexto _remoto_, onde é limitada a capacidade de sentir as estudantes, seja pela distância estrutural ou por uma carência de respostas cognitivas; as dinâmicas de interação se tornam muito importantes para manter atenção, engajamento e entender como estão absorvendo o conteúdo apresentado.

Moore criou a expressão distância transacional para nomear esse espaço de comunicação entre o professor e o aluno, atribuindo a ele uma dimensão psicológica. A distância transacional é um espaço a ser transposto, nas palavras de Moore. No final da página, temos um link falando a respeito dessa citação e da expressão.

A distância transacional é um obstáculo enfrentado pela educação remota. É importante citar três pontos nesse conceito. Veja, também, que o objetivo dessa explicação é explicar conceitos que abrangem a educação remota e mostrar ferramentas que agem acerca desses assuntos.

O diálogo: quanto mais possibilidade de interação, menor consciência da distância transacional. Quando há esse espaço, a atenção do estudante é mais voltada para aula.

Perguntas sobre o conteúdo são sempre bem-vindas, mas merecem uma organização por relevância. Uma plataforma que ajuda nisso é o **Sli.do**, que ordena as perguntas feitas pelo alunos pelas mais votadas e pela ordem de postagem.

Sli.do : https://www.sli.do/

O professor cria a sala no site e compartilha o link para os alunos, afim de receber suas perguntas. Ao criar uma pergunta ela pode ser anônima, então é importante que tanto as perguntas sejam feitas quanto sejam nomeadas.

Compartilhar a tela é uma forma de trazer um conteúdo, que está no seu computador, reproduzido na tela de todos os alunos. Conteúdos, como slides e exemplos, podem ser tanto compartilhados com estudantes via tela compartilhada, como com um _link_ de acesso.

A estrutura da aula aproxima os estudantes quanto mais flexível for, e os distancia quanto mais rígida. Ou seja, quando dado o incentivo para o estudante se engajar com a classe, menores as chances que ele recorra a uma distração, claramente ao alcance.

Quando a estrutura é rígida e há pouco diálogo a autonomia do estudante precisa ser maior, para que seu aprendizado seja assegurado. A capacidade do aluno para assumir responsabilidades influencia muito sua independência. Incentivá-la, portanto, torna-se um grande desafio.

Um outro fato que influência o envolvimento do estudante na aula é uma presença social, mesmo que ela, física, na atual circunstância não seja possível. É clara a presença social quando não há barreiras de distância e quando há engajamento em atividades de interesse comum a um grupo. A interação com os colegas ganha maior importância, e atividades de colaboração com grande interação entre o grupo contribuem a percepção de presença social.

Uma ferrameta que ajuda na interação é o Slack, uma plataforma de organização interna para grupos, como um WhatsApp para times ou corporações. Existem tanto conversas particulares quanto em grupo, sendo possível marcar pessoas, compartilhar arquivos, e há canais que podem se organizar em temas diversos.

Aqui está o guia oficial: https://get.slack.help/hc/pt-br/categories/360000049043
`;

const briefing = `## DINÂMICAS DE INTERAÇÃO

Autonomia aos estudantes dentro da aula.`;

const obj = {
  title: 'Interações estudantes e professores',
  type: 'Professores', 
  briefing, 
  content,
  nav: [
    { link: 'Distância transacional', href: 'distancia-transacional-id' } // id para navegação
  ],
}

export default obj;
