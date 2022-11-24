import Display from "./Display"
import PaneldeBotones from "./PaneldeBotones"
import {Component} from "react"


class App extends Component {
  state =  {
    total: null,
    siguiente: null,
    operador: null
  }

  render () {
  return (
    <div>
    <Display value={this.state.siguiente || this.state.total || "0"}/>  
    <PaneldeBotones/>
    </div>
  );
}
}
export default App;

//usamos this para entrar en el contexto de la clase