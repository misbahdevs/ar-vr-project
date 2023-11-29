import "aframe";
import "aframe-react";

// eslint-disable-next-line react/prop-types
const Aframe = ({ name }) => {
  return (
    <a-scene>
      {/* Latar Belakang (Sky) */}
      <a-sky src="https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></a-sky>

      {/* Teks */}
      <a-text
        position="-0.75 2.5 -3"
        value={`Hello ${name}! \nWelcome to my world`}
        color="white"
        align="center"
      ></a-text>

      {/* Objek Planet */}
      <a-icosahedron
        position="-1 0.5 -3"
        radius="1"
        detail="2"
        color="#4CC3D9"
      ></a-icosahedron>

      <a-icosahedron
        position="0 1.25 -5"
        radius="1.25"
        detail="2"
        color="#EF2D5E"
      ></a-icosahedron>

      <a-icosahedron
        position="1 0.75 -3"
        radius="0.75"
        detail="2"
        color="#FFC65D"
      ></a-icosahedron>
    </a-scene>
  );
};

export default Aframe;
