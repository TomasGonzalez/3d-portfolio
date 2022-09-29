const PAGE_DEPH_MARGIN = 15;
const configs = {
  navTitle: 'Tomas Gonzalez portfolio.',
  pages: [
    {
      scale: [15, 15, 15],
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
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
      scale: [15, 15, 15],
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Skills',
      image: 'https://m.media-amazon.com/images/I/81jRRJCge5L._SS500_.jpg',
      footer: 'And more...',
      imageList: [
        {
          image: 'icons/react-native.png',
        },
        {
          image: 'icons/react-logo.png',
        },
        {
          image: 'icons/ts-logo.png',
        },
        {
          image: 'icons/js-logo.png',
        },
        {
          image: 'icons/css-logo.png',
        },
        {
          image: 'icons/html-logo.png',
        },
        {
          image: 'icons/node-js-logo.png',
        },
        {
          image: 'icons/python-logo.png',
        },
        {
          image: 'icons/three-js-logo.png',
        },
        {
          image: 'icons/jest-logo.png',
        },
        {
          image: 'icons/graph-ql-logo.png',
        },
        { image: 'icons/vim-logo.png' },
      ],
    },
    {
      scale: [15, 15, 15],
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'idk3',
      image: 'https://m.media-amazon.com/images/I/81jRRJCge5L._SS500_.jpg',
      infos: [
        'I’m a creator, a curious mind who finds pleasure in learning and understanding how things work.',
      ],
    },
    {
      scale: [15, 15, 15],
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'idk',
      image: 'https://m.media-amazon.com/images/I/81jRRJCge5L._SS500_.jpg',
      infos: [
        'I’m a creator, a curious mind who finds pleasure in learning and understanding how things work.',
      ],
    },
    {
      scale: [15, 15, 15],
      rotation: [-Math.PI / 2, 0, 0],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Test',
      image: 'https://m.media-amazon.com/images/I/81jRRJCge5L._SS500_.jpg',
      infos: [
        'I’m a creator, a curious mind who finds pleasure in learning and understanding how things work.',
      ],
    },
    {
      scale: [15, 15, 15],
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'Experience',
      image: 'https://m.media-amazon.com/images/I/81jRRJCge5L._SS500_.jpg',
      infos: [
        'I’m a creator, a curious mind who finds pleasure in learning and understanding how things work.',
      ],
    },
  ],
};

export default configs;
