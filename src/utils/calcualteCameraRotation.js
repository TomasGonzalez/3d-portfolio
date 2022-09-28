import { Quaternion } from 'three';

const calculateCameraRotation = (scrollOffset, rotationTrail) => {
  const initialRotationNode = [...rotationTrail]
    .sort((a, b) => b.offset - a.offset)
    .find((rotationNode) => rotationNode.offset <= scrollOffset);

  const finalRotationNode =
    rotationTrail[
      rotationTrail.findIndex(
        (rotationNode) => rotationNode?.offset === initialRotationNode?.offset
      ) + 1
    ];

  const calculateScrollOffsetRelativeToCurrentRoatationSlerp =
    (scrollOffset - initialRotationNode.offset) /
    (finalRotationNode?.offset - initialRotationNode?.offset);

  //interpolate camera rotation between nodes in the rotationTrail array
  const camRotation = new Quaternion().slerpQuaternions(
    new Quaternion().setFromEuler(initialRotationNode?.rotation),
    new Quaternion().setFromEuler(finalRotationNode?.rotation),
    calculateScrollOffsetRelativeToCurrentRoatationSlerp
  );

  return camRotation;
};

export default calculateCameraRotation;
