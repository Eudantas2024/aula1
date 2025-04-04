import { Frase } from "./Frase"
import { HelloWorld } from "./HelloWorld"
import { Pessoa } from "./Pessoa"



function App() {

  return (
    <>
    
    <h1>dantas</h1>
    <Frase/>
    <h2>Campinas</h2>
    <HelloWorld />
    <Pessoa
       nome="Godinho"
       idade="29"
       profissao="Vigilante"
       foto="https://th.bing.com/th?id=ORMS.b683165321a92c8ae5ad880ac7f77d9b&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0"
    />

    <Pessoa
       nome="Maria"
       idade="38"
       profissao="Médica"
       foto="https://cdn.pixabay.com/photo/2025/03/28/11/46/butterfly-9498703_960_720.jpg"
    />


        
    </>
    
  )
}

export default App

