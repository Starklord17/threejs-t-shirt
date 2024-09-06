import { useRef } from "react";
// import { easing } from "maath";
// import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {

  const shadows = useRef();
/* 
  Utilizando useFrame para animar la posición de las luces
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime(); // Obtener el tiempo transcurrido

    Animar la posición de las luces utilizando easing
    const light1Position = [
      easing.easeInOutSine(t, -5, 5, 10), // Animar la posición en el eje x
      5, // Mantener la posición en el eje y
      -9 // Mantener la posición en el eje z
    ];
    const light2Position = [
      easing.easeInOutSine(t, 5, -5, 10), // Animar la posición en el eje x
      5, // Mantener la posición en el eje y
      -10 // Mantener la posición en el eje z
    ];

    Actualizar la posición de las luces
    shadows.current.children[0].position.set(...light1Position);
    shadows.current.children[1].position.set(...light2Position);
  });
 */

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal={true} // smooth out the edges of the shadows over time
      frames={60}
      alphaTest={0.85} // Transparency of the shadows
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
