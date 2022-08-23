import './App.css';
import Mensaje from'./components/Mensaje.js'

function App() {

 
  return (
    <div className="App">
      <Mensaje color= 'red' mensaje = 'Estamos trabajando'/>
      <Mensaje color= 'green' mensaje = 'en un curso de React'/>
      <Mensaje color= 'yellow' mensaje = 'Practicando'/>
      
      
      </div>
  );
}

export default App;
