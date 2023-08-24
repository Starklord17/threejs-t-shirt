import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb');

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && (
          <Decal 
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal 
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            {...{ mapAnisotropy: 16, depthTest: false, depthWrite: true }}
          />
        )}
      </mesh>
    </group>
  )
}

export default Shirt

/* 
The second version of the code with the additional properties spread onto the Decal component fixed your problem because it correctly adds the desired properties to the Decal component.

In React, when you want to pass multiple props to a component, you can either pass them directly as separate props or use the spread syntax ({...}) to spread an object containing the props onto the component.

In your case, the additional properties mapAnisotropy, depthTest, and depthWrite were not recognized by the Decal component in the first version of the code. By using the spread syntax in the second version, these properties are properly spread onto the Decal component, allowing it to receive and utilize the additional properties correctly.

By spreading the additional properties onto the Decal component, you ensure that the component receives all the necessary props for it to function as intended, fixing the problem you were experiencing. 
*/

/* The properties mapAnisotropy, depthTest, and depthWrite were not recognized in the first version of the code because they were not defined as valid props for the Decal component.

In React, components can only receive and recognize props that are explicitly defined and expected by the component. When you pass a prop to a component that is not recognized or expected, React will ignore that prop and it will not have any effect on the component. */