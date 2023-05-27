import "./App.css";
import Lista from "./components/Lista";
import Titulos from "./components/Titulos";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // aqui va la logica
  
  return (
  //puedo escribir un poquito de logica
  //<> es un fragment
  <>
    {/* esto es un comentario del html */}
    {/* <Titulos></Titulos> */}
    <Titulos/>
    <section className="container">
      <h3>Servicios</h3>
      <hr/>
      <Lista/>
    </section>
  </>
  );
}

export default App;
