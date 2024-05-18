import { useState } from "react";
const Pestañas = ({ elements }) => {
  const [mensaje, setMensaje] = useState(elements[0]);

  const guardarMensaje = (event) => {
    let linkAnterior = document.querySelector(".active");

    if (!event.target.classList.contains("active")) {
      event.target.classList.add("active");
      linkAnterior.classList.remove("active");
    }
    setMensaje(elements[event.target.attributes.value.value]);
  };

  return (
    <>
      <div className="links active primer" onClick={guardarMensaje} value={0}>
        Tab 1
      </div>
      <div className="links" onClick={guardarMensaje} value={1}>
        Tab 2
      </div>
      <div className="links" onClick={guardarMensaje} value={2}>
        Tab 3
      </div>
      <div className="content">{mensaje}</div>
    </>
  );
};

export default Pestañas;
