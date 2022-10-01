import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'Tomas Gonzalez',
  subTitle: 'Dev portfolio.',
  stars: {
    maxSize: 20,
    emissionIntencity: 20,
    //optionally stars can be an image
    // url: 'icons/three-js-logo.png',
    dencity: 900,
  },
  navTitle: 'Tomas Gonzalez portfolio.',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'Who Am I?',
      infos: [
        '* I’m a creator, a curious mind who finds pleasure in learning and understanding how things work.',
        '* My journey as a software developer started when I was a just a kid trying to figure out how video games where made.',
        '* I started my career as a Front end developer around 6 years ago in 2017, and since then I have helped many startup companies and non-profit organizations to develop quality products.',
        '* I have a wide range of skills, of which I can say that I’ve mastered many.',
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Previous Work'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Experience',
      imageList: EXPERIENCE,
      footer: 'You can click the icons to find out more.',
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      footer: 'And more...',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Download CV'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Here is my CV!',
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
      infos: [
        'I’m a creator, a curious mind who finds pleasure in learning and understanding how things work.',
      ],
    },
  ],
};

export default configs;
