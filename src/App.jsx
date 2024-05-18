
import './App.css';
import Pestañas from './components/Pestañas/Pestañas'


const elements = ["primer contenido", "segundo contenido", "tercer contenido"]




function App() {
  

  return (
    <div className="App">
      <Pestañas elements={elements}/>
    </div>
  );





}

export default App;
