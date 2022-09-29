import { useEffect } from 'react';
import theme from '~/src/theme';

const useSetColor = (nodes) => {
  useEffect(() => {
    nodes['Cube002'].children.forEach((face) => {
      face.material.transparent = true;
    });

    Object.values(nodes).forEach((face) => {
      if (face.material) {
        if (
          face.material.name === 'HoloFillDark.001' ||
          face.material.name === 'HoloFillDark'
        ) {
          face.material.color = {
            ...face.material.color,
            ...theme.colors.cubeFaceColor,
          };
          face.material.emissive = {
            ...face.material.emissive,
            ...theme.colors.cubeEmissionFaceColor,
          };
        }
        if (
          face.material.name === 'constant2' ||
          face.material.name === 'constant2.001'
        ) {
          face.material.color = {
            ...face.material.color,
            ...theme.colors.cubeEdgeColor,
          };
          face.material.emissive = {
            ...face.material.emissive,
            ...theme.colors.cubeEmissionEdgeColor,
          };
        }
      }
    });
  }, []);
};

export default useSetColor;
