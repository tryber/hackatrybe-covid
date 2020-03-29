const content = `<h2 id="oque-slack-id">O que é o Slack?</h2>

O Slack é uma plataforma para comunicação de todo tipo de organização. Muito versátil, possui canais onde discutem-se assuntos acerca de algum tema. Podemos enviar mensagens de texto e voz assim como documentos e videos. Tendo impecável organização, o Slack é um sucesso!

<h2 id="porque-usar-id">Por que usar o Slack?</h2>

Com uma interface muito bem desenvolvida é fácil usar o Slack para comunicar com a sua equipe. Como ele centraliza as mensagens, fica fácil achar aquele arquivo ou conversa antigo que você precisa no momento. Com disponibilidade mobile, você pode baixar o app para seu celular e levar todas as conversas no seu bolso!
O slack usa notificações pra você não ficar de fora das novidades que chegam nos canais ou mensagens dirigidas somente a você. Isso aumenta muito a produtividade e a eficiência da comunicação.

### Atenção!

- O Slack não tem aplicativo para Windows Phone

<h2 "boas-praticas-id">Boas praticas</h2>

- Perfil pessoal:

Iniciando o uso do Slack, preencha seu perfil pessoal com nome completo e número de telefone. É aconselhável colocar uma foto do seu rosto centralizado para facilitar a identificação. Preencha a descrição da sua ocupação com um texto objetivo que tenha clareza no campo "o que eu faço". Você também pode configurar um nome de exibição!

[![N|Solid](markdown/images/perfil_slack.png)]

- Atente-se a:

Sempre leia as conversas que já constam nos seus canais, evite repetir questões já trabalhadas. Os canais do Slack são como grupos de pessoas que têm um objetivo em comum.

- O que são os canais?

Você pode adicionar os canais de seu interesse e acompanhar a comunicação da sua instituição. O Slack também conta com mensagens diretas para você alcançar alguém do seu time rapidamente.

- Atente-se a:

Não fugir do assunto de um canal postando coisas que não pertencem ao proposito dele.

- Use menções:

No Slack é possivel notificar alguem mencionando seu nome de exibição com um "@". Por ex: "@HugoJr"
`

const briefing = `## Conhecendo e usando o Slack

O Slack é uma plataforma para comunicação de todo tipo de organização. Muito versátil, possui canais onde discutem-se assuntos acerca de algum tema. Podemos enviar mensagens de texto e voz assim como documentos e videos. Tendo impecável organização, o Slack é um sucesso!
`

const obj = {
  title: 'Conhecendo e usando o Slack',
  type: 'Ferramenta',
  briefing, 
  content,
  nav: [
    { link: 'O que é o Slack', href: 'oque-slack-id' }, 
    { link: 'Por que usar o Slack?', href: 'porque-usar-id' }, 
    { link: 'Boas praticas', href: 'boas-praticas-id' } 
  ],
}

export default obj;
