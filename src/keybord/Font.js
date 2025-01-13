import { useState } from "react"

const Font = ({ changeFont }) => { 
  const [font, setFont] = useState('Arial')

  return (<div style={{width:"5%" , marginLeft:"0.5%",top:"10%",height:"15%",}}>
    <select onChange={(event) => changeFont(event.target.value)}> 
      <option value="Arial">Arial</option>
      <option value="Verdana">Verdana</option>
      <option value="Times New Roman">Times New Roman</option>
      <option value="Courier New">Courier New</option>
    </select>
    </div>
  )
}

export default Font