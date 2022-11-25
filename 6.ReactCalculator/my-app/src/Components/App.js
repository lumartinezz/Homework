import Display from "./Display"
import PaneldeBotones from "./PaneldeBotones"
import {Component} from "react"
import operaciones from "../Logic/operaciones"


class App extends Component {
  state =  {
    total: null,
    siguiente: null,
    operador: null
  }

  handleClick = nombreDeBoton => this.setState(operaciones(this.state, nombreDeBoton)) //pasamos parametros de operacones y nombre del boton que tiene el value

  render () {
  return (
    <div>
    <Display value={this.state.siguiente || this.state.total || "0"}/>  
    <PaneldeBotones clickHandle={this.clickHandle}/>
    </div>
  );
}
}
export default App;

//usamos this para entrar en el contexto de la clase

//como son metodos no se declaran con const porque estamos dentro de una clase