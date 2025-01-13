import './App.css';
import { useState } from 'react';

import MainKeybord from "./keybord/MainKeybord";
import Mainget100 from "./get100/Mainget100"

function App() {
  const [game,setGame]=useState(1)
  return (
   <div className='app'>
        
  <button id='buttons' onClick={()=>{setGame(1)}}>WYSIWYG</button>
  <button id='buttons' onClick={()=>{setGame(2)}}>Get to 100</button>
    {game===1 &&<MainKeybord />}
    {game===2 &&<Mainget100 />}

  </div>
 
 
 
  );
}

export default App;
