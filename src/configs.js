const PAGE_DEPH_MARGIN = 15;
/* 
  position is relative to the scrollComponent, that's for the nav bar, 
  displayPosition is the offset of the default camara position when facing the cube.
*/
const STOPS = [
  { displayPosition: 0, position: 0, name: 'Title' },
  { position: 0.15, displayPosition: 0.13, name: 'About' },
  { position: 0.2337, displayPosition: 0.2337, name: 'Skills' },
  { position: 0.3382, displayPosition: 0.3382, name: 'Previous Work' },
  { position: 0.4409, displayPosition: 0.4409, name: 'Download CV' },
  { position: 0.55, displayPosition: 0.55, name: 'Personal Proyects' },
  { position: 0.652, displayPosition: 0.652, name: 'Get In Touch' },
  { position: 1, displayPosition: 1, name: 'Profile Picture' },
];

const displayAt = (stopName) =>
  STOPS.find((stop) => stop.name === stopName).displayPosition;

const configs = {
  navTitle: 'Tomas Gonzalez portfolio.',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'Who Am I?',
      image: 'https://m.media-amazon.com/images/I/81jRRJCge5L._SS500_.jpg',
      infos: [
        '* I’m a creator, a curious mind who finds pleasure in learning and understanding how things work.',
        '* My journey as a software developer started when I was a just a kid trying to figure out how video games where made.',
        '* I started my career as a Front end developer around 6 years ago in 2017, and since then I have helped many startup companies and non-profit organizations to develop quality products.',
        '* I have a wide range of skills, of which I can say that I’ve mastered many.',
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Skills',
      image: 'https://m.media-amazon.com/images/I/81jRRJCge5L._SS500_.jpg',
      footer: 'And more...',
      imageList: [
        'icons/react-native.png',
        'icons/react-logo.png',
        'icons/ts-logo.png',
        'icons/js-logo.png',
        'icons/css-logo.png',
        'icons/html-logo.png',
        'icons/node-js-logo.png',
        'icons/python-logo.png',
        'icons/three-js-logo.png',
        'icons/jest-logo.png',
        'icons/graph-ql-logo.png',
        'icons/vim-logo.png',
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Previous Work'),
      rotation: [-Math.PI / 2, 0, 0],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Previous Work',
      image: 'https://m.media-amazon.com/images/I/81jRRJCge5L._SS500_.jpg',
      infos: [
        'I’m a creator, a curious mind who finds pleasure in learning and understanding how things work.',
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Download CV'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Here is my CV!',
      image: 'https://m.media-amazon.com/images/I/81jRRJCge5L._SS500_.jpg',
      infos: [
        'I’m a creator, a curious mind who finds pleasure in learning and understanding how things work.',
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Personal Proyects'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'Personal Proyects',
      image: 'https://m.media-amazon.com/images/I/81jRRJCge5L._SS500_.jpg',
      infos: [
        'I’m a creator, a curious mind who finds pleasure in learning and understanding how things work.',
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'You can find me in:',
      image: 'https://m.media-amazon.com/images/I/81jRRJCge5L._SS500_.jpg',
      infos: [
        'I’m a creator, a curious mind who finds pleasure in learning and understanding how things work.',
      ],
    },
  ],
};

export default configs;
