import { Euler, Vector3, CatmullRomCurve3 } from 'three';
import { isMobile } from 'react-device-detect';

export const rotationTrail = [
  isMobile
    ? {
        rotation: new Euler(-2.2901, -0.8049, -2.5152),
        offset: 0,
      }
    : {
        rotation: new Euler(-2.3901, -0.7069, -2.5962),
        offset: 0,
      },
  {
    rotation: new Euler(-2.0451, -0.4533, -2.4354),
    offset: 0.1,
  },
  {
    rotation: new Euler(-2.9813, -0.1572, -3.0154),
    offset: 0.149,
  },
  {
    rotation: new Euler(3.1138, -0.0368, -3.0717),
    offset: 0.16,
  },
  {
    rotation: new Euler(-3.1167, 0.0037, 3.1405),
    offset: 0.186,
  },
  {
    rotation: new Euler(-3.0213, -0.8476, -3.056),
    offset: 0.211,
  },
  {
    rotation: new Euler(-1.1936, -1.5367, -1.199),
    offset: 0.236,
  },
  {
    rotation: new Euler(
      -2.57668191344638,
      -1.5639999860715151,
      -2.5767104207609725
    ),
    offset: 0.24546,
  },
  {
    rotation: new Euler(-2.4769, -1.5479, -2.4769),
    offset: 0.251,
  },
  {
    rotation: new Euler(-1.5748, -0.4812, -1.5777),
    offset: 0.273,
  },
  {
    rotation: new Euler(
      -1.5707963267948966,
      -0.0074456249414125795,
      -1.57083373906561815
    ),
    offset: 0.29361,
  },
  {
    rotation: new Euler(
      -0.3058903765163377,
      -0.0898075679095149685,
      -0.4104142367364855
    ),
    offset: 0.341,
  },
  {
    rotation: new Euler(
      -0.0047903765163377,
      0.0030075679095149685,
      0.0000142367364855
    ),
    offset: 0.373,
  },
  {
    rotation: new Euler(1.0987, 0.0076, -0.0015),
    offset: 0.408,
  },
  {
    rotation: new Euler(1.5173, 0.0008, -0.003),
    offset: 0.422,
  },
  {
    rotation: new Euler(1.5987, -0.00006, -0.0028),
    offset: 0.441,
  },
  {
    rotation: new Euler(1.5887, 0.5751, -0.9799),
    offset: 0.469,
  },
  {
    rotation: new Euler(1.3513, 1.329, -1.0286),
    offset: 0.495,
  },
  {
    rotation: new Euler(-1.6917, 1.4732, 1.8717),
    offset: 0.506,
  },
  {
    rotation: new Euler(2.0698, 1.5493, -2.0699),
    offset: 0.521,
  },
  {
    rotation: new Euler(2.569, 1.5384, -2.5651),
    offset: 0.593,
  },
  {
    rotation: new Euler(-3.126, 0.6534, 3.1406),
    offset: 0.677,
  },
  {
    rotation: new Euler(-3.1193, 0.1298, -3.1369),
    offset: 0.723,
  },
  {
    rotation: new Euler(-3.1327, -0.4017, -3.1317),
    offset: 0.765,
  },
  {
    rotation: new Euler(-3.1304, -0.9506, -3.1276),
    offset: 0.808,
  },
  {
    rotation: new Euler(-2.9237, -1.5023, -2.9212),
    offset: 0.842,
  },
  {
    rotation: new Euler(-0.0487, -1.0081, -0.0399),
    offset: 0.881,
  },
  {
    rotation: new Euler(-0.0489, -0.503, -0.0216),
    offset: 0.91,
  },
  {
    rotation: new Euler(-0.0907, -0.0202, 0.0054),
    offset: 0.931,
  },
  {
    rotation: new Euler(-0.1859, 0.4699, 0.1211),
    offset: 0.955,
  },
  {
    rotation: new Euler(
      1.4164903765163377,
      1.7855375679095149685,
      -1.4193242367364855
    ),
    offset: 1,
  },
];

const curve = new CatmullRomCurve3([
  //start
  new Vector3(-289, 186, -100),
  new Vector3(-54, 95, -37),
  new Vector3(-7, 3, -115),
  //face 1
  new Vector3(0.147, 0.806, -34.587),
  new Vector3(-0.15, 1.015, -42.1),
  new Vector3(-51, 8.84, -50.017),
  new Vector3(-69, 4.72, -1.108),
  //face 2
  new Vector3(-55, 2.43, 1.788),
  new Vector3(-34.544, 0.21, -0.176),
  new Vector3(-48.544, 0.21, -0.176),
  new Vector3(-37.402, 34.608, -0.176),
  //face 3
  new Vector3(0.462, 59.58, 1.055),
  new Vector3(1.836, 59.636, 1),
  new Vector3(0.041, 34.015, 1),
  new Vector3(0.041, 51.015, 1),
  //face 4
  new Vector3(-4.8041, 56.015, 70.403),
  new Vector3(-4.641, 1.015, 87.403),
  new Vector3(-0.221, 2.015, 51.403),
  new Vector3(1.048, 0.125, 33.959),
  new Vector3(1.048, 0.125, 47.959),
  //trasntion
  new Vector3(-1.05, -52.5, 51),
  //face 5
  new Vector3(-0.8, -79.37, 2.201),
  new Vector3(0.305, -33.2, 0, 450),
  new Vector3(0.305, -58.2, 0, 450),
  //transition
  new Vector3(60.305, -59.2, -0, 450),
  //face 6
  new Vector3(78.74, 4.807, -0, 730),
  new Vector3(33.83, -0.379, -1.192),
  new Vector3(55.83, -0.379, -1.192),
  //spin-off
  new Vector3(221, 1, 2),
  new Vector3(140, 9, -180),
  new Vector3(-11, 0, -220),
  new Vector3(-130, 0, -120),
  new Vector3(-160, 0, 0),
  new Vector3(-120, 0, 70),
  new Vector3(-6, 8, 120),
  new Vector3(50, 12, 70),
  new Vector3(55.83, -0.379, -1.192),
  new Vector3(33.83, 5.379, -1.192),
]);

curve.curveType = 'centripetal';
curve.closed = false;

export default curve;
