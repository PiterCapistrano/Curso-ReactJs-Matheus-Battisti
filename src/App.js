import './App.css';
import './components/HelloWorld'
import HelloWorld from './components/HelloWorld';
import SayMayName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import { useState } from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
import Barra from './components/Barra';
import Footer from './components/layout/Footer';

function App() {
  const nome3 = 'José'

const meusItens = ['React', 'Vue', 'Angular']

const [nome, setNome] = useState()


  return (
    
    <div className="App">
      <Barra />
      <h1>Testando CSS</h1>
      <HelloWorld />
      <SayMayName nome="Piter" />
      <SayMayName nome="Julia" />
      <SayMayName nome= {nome3} />
      <Pessoa nome="Piter" idade="31 anos" profissao="Eng. Civil"/>
      <List />
      <h1>Testando Eventos</h1>
      <Evento numero="1" />
      <Form />
      <h1> Renderização Condicional</h1>
       <Condicional />
       <h1>Renderização de Listas</h1>
       <OutraLista itens={meusItens} />
       <OutraLista itens={[]} />
       <h1>State Lift</h1>
       <SeuNome setNome={setNome} />
      <Saudacao nome={nome}/>
      <Footer />
    </div>
  )
}

export default App;
