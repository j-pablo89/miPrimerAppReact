import "./App.css";
import Lista from "./components/Lista";
import Titulos from "./components/Titulos";

function App() {
  // aqui va la logica
  
  return (
  //puedo escribir un poquito de logica
  //<> es un fragment
  <>
    {/* esto es un comentario del html */}
    {/* <Titulos></Titulos> */}
    <Titulos/>
    <h3>Servicios</h3>
    <Lista/>
  </>
  );
}

export default App;
