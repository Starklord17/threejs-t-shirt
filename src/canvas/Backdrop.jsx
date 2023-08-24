import React, { useRef } from "react";
// import { easing } from "maath";
// import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {

  const shadows = useRef();
/* 
  // Utilizando useFrame para animar la posición de las luces
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime(); // Obtener el tiempo transcurrido

    // Animar la posición de las luces utilizando easing
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

    // Actualizar la posición de las luces
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

/* 
easing: se utiliza para proporcionar funciones de interpolación que permiten animar propiedades de manera suave y controlada. Estas funciones de interpolación pueden ser útiles si se desea agregar animaciones personalizadas a los elementos de la escena, como transiciones suaves entre diferentes estados o efectos de movimiento más complejos. Si se desea agregar animaciones personalizadas a los elementos en el código, la importación de easing podría ser útil para proporcionar las funciones de interpolación necesarias.

useFrame: se utiliza en el contexto de la biblioteca @react-three/fiber para acceder al bucle de renderizado de Three.js y realizar acciones en cada fotograma de la animación. Esta función de gancho personalizado permite ejecutar código en cada fotograma de la animación, lo que puede ser útil para realizar actualizaciones dinámicas en la escena en respuesta a eventos o cambios en el estado. Por ejemplo, se puede utilizar useFrame para realizar transformaciones o animaciones específicas en los elementos de la escena en función del tiempo transcurrido o de otros factores. Si se desea agregar lógica personalizada que se ejecute en cada fotograma de la animación, la importación de useFrame podría ser útil para proporcionar esta funcionalidad. */