import { useState } from "react";
import Aframe from "./components/AFrame";

const App = () => {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  const showAframe = () => {
    setShow(true);
  };

  return (
    <div className="container h-screen m-auto bg-slate-800 text-slate-100 flex flex-col items-center justify-center">
      {show ? (
        <Aframe name={name} />
      ) : (
        <div className="flex flex-col gap-3 bg-slate-700 w-[500px] p-5 rounded-lg">
          <h1 className="text-3xl mb-3">Join to World 🌎</h1>
          <span className="font-semibold">Ketik nama Anda: </span>
          <input
            type="text"
            value={name}
            className="p-2 rounded-md outline-none text-slate-800"
            placeholder="Input your name..."
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="bg-blue-500 px-3 py-2 rounded-lg"
            onClick={() => showAframe()}
          >
            Join to VR
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
