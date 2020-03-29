import stringReduzidoZoom from './contents/test.js';
// import stringCompletoZoom from 'contents/zoom.md';
console.log(stringReduzidoZoom)
const content = [
  {
    type: 'Ferramentas',
    title:'Zoom',
    mdReduzido: stringReduzidoZoom,
    mdCompleto: '## Microfone',
    sideBar:['',''],
  },
  {
    type: 'Ferramentas',
    title:'Zoom',
    mdReduzido: `##### Microfone,
    Arquivo show
    `,
    mdCompleto: '## Microfone',
    sideBar:['',''],
  },
  {
    type: 'Ferramentas',
    title:'Zoom',
    mdReduzido: `##### Microfone,
    Arquivo show
    `,
    mdCompleto: '## Microfone',
    sideBar:['',''],
  },
  {
    type: 'Professores',
    title:'Zoom',
    mdReduzido: `##### Microfone,
    Arquivo show
    `,
    mdCompleto: '## Microfone',
    sideBar:['',''],
  },
  // {
  //   type:'Professor',
  //   title:'ExperienciaVisual',
  //   mpReduzido: stringReduzido,
  //   mdCompleto: stringCompleto,
  //   sideBar:['BoasPraticas','Drawio','goCONRQ'],
  // },
  // {
  //   type:'Professor',
  //   title:'Boas praticas Professor',
  //   mpReduzido: stringReduzido,
  //   mdCompleto: stringCompleto,
  //   sideBar:['BoasPraticas','Drawio','goCONRQ'],
  // },
  // {
  //   title:'ExperienciaVisual',
  //   type:'Aluno',
  //   mpReduzido: stringReduzido,
  //   mdCompleto: stringCompleto,
  //   sideBar:['BoasPraticas','Drawio','goCONRQ'],
  // },
]

export default content;
