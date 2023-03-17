import React, {useState} from 'react';
import './App.css';
import MyBody from './MyBody';

function App() {

  const [str, setStr] = useState("Olá mundo");
  //useState(false);
  //useState([])
  //useState(2)
  function handleClick(){
    setStr('Olá Felipe')
  }

  return (
    <div className="App">
      <h2>{str}</h2>
      <button onClick={() => handleClick()}>Clique aqui</button>

      <MyBody conteudo = "Body1"></MyBody>
      <MyBody conteudo = "Body2"></MyBody>
      <MyBody conteudo = "Body3" conteudo2="Felipe"></MyBody>
      <MyBody></MyBody>
      <MyBody></MyBody>
      <MyBody></MyBody>

    </div>
  );
}

export default App;
