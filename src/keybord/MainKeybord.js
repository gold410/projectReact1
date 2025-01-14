import { useState } from "react"
import Showkeybord from "./Showkeybord"
import Font from "./Font"
import Size from "./Size"
import Hebrew from "./Hebrew"
import Lower from "./Lower"
import Upper from "./Upper"
import Emogi from "./emogi"
import NumChar from "./NumChar"

const MainKeybord=()=>{

const [letters,setLetters]=useState([])
const [color,setColor]=useState("black")
const [backColor,setBackColor]=useState("white")
const [font, setFont]=useState("Arial")
const [bold,setBold]=useState(false)
const [size, setSize]=useState(25)
const [isUnderline, setIsUnderline] = useState(false);
const [KeyboardType, setKeyboardType] = useState("english")



const addLetter=(letter)=>{
const obj={
    color:color,
    letter:letter,
    backColor:backColor,
    font:font,
    bold:bold ? 'bold' : 'normal',
    isUnderline:isUnderline ? "underline" : "none"
}
setLetters([...letters,obj])
}
//פונקציית color
const changeColor = (event) => {
    setColor(event.target.value)
  }
  //BackColor פונקציית 
  const changeBack = (event) => {
    setBackColor(event.target.value)
  }
//פונקצית font
const changeFont=(newFont)=>{
    setFont(newFont)
}
//פונקציית size
const changeSize=(newSize)=>{
    setSize(newSize)
}
//פונקציית delete
  const deleteLetter=()=>{
    let newLetters = [...letters]
    newLetters=newLetters.slice(0,newLetters.length-1)
    setLetters(newLetters)
  }
  // פונקציית אות גדולה
  const handleUpperCase = () => {
    const newLetters = letters.map((letterObj) => ({
      ...letterObj,
      letter: letterObj.letter.toUpperCase(),
    }));
    setLetters(newLetters);
  }
  //פונקציית אות קטנה
  const handleLowerCase = () => {
    const newLetters = letters.map((letterObj) => ({
      ...letterObj,
      letter: letterObj.letter.toLowerCase(),
    }));
    setLetters(newLetters);
  }
//פונקציית קו תחתית
const toggleUnderline = () => {
  setIsUnderline(!isUnderline);
};
//פונקציית הדגשה
const boldLetter = () => {
  setBold(!bold);
};




return <>
<h1 id="title">Main Keybord</h1>
<Showkeybord letters={letters} color={color} back={backColor} font={font} size={size}  />

<div className="keyBordButtons">
<div className="container">
<button onClick={() => {toggleUnderline()}} style={{width:"5%" , marginLeft:"5%",height:"15%",}}>U</button>
<button onClick={() => {handleUpperCase()}} style={{width:"5%" , marginLeft:"5%",height:"15%",}}>A+</button>
<button onClick={() => {handleLowerCase()}} style={{width:"5%" , marginLeft:"5%",height:"15%",}}>A-</button> 
<button onClick={() => {boldLetter()}} style={{width:"5%" , marginLeft:"5%",height:"15%",}}>B</button> 
<Font changeFont={changeFont}/>
<Size changeSize={changeSize}/>
<label>color</label>
<input type="color" onChange={changeColor}/>
<label>back</label>
<input type="color" onChange={changeBack}/>
</div>
{KeyboardType === "hebrew" && <Hebrew addLetter={addLetter} />}
{KeyboardType === "english" && <Lower addLetter={addLetter} />}
{KeyboardType === "symbol" && <Emogi addLetter={addLetter} />}
{KeyboardType === "capital" && <Upper addLetter={addLetter} />}
{KeyboardType === "shift" &&  <NumChar addLetter={addLetter} />}
<br/>
<button onClick={() => { setKeyboardType("shift") }} style={{ width:"15%",height:"5vh",marginLeft:"8%"}}>shift</button>
<button onClick={() => {setLetters([])}} style={{ width:"15%",height:"5vh",marginLeft:"8%"}}>clear</button>
<button onClick={() => {deleteLetter()}} style={{ width:"15%",height:"5vh",marginLeft:"8%"}}>delete</button>
<button onClick={() => {addLetter('<br/>')}} style={{ width:"15%",height:"5vh",marginLeft:"8%"}}>enter</button>
<br/>
<br/>
<button onClick={() => { setKeyboardType("hebrew") }} style={{ width:"15%" ,height:"5vh",marginLeft:"1%" }}>hebrew</button>
<button onClick={() => { setKeyboardType("capital") }} style={{width:"15%" ,height:"5vh",marginLeft:"1%"}}>capital</button>
<button onClick={() => {addLetter(" ")}} style={{width:"35%",height:"5vh", justifyContent:"center",marginLeft:"0.6%"}}>Space</button>
<button onClick={() => { setKeyboardType("english") }} style={{ width:"15%" ,height:"5vh",marginLeft:"1%"}}>english</button>
<button onClick={() => { setKeyboardType("symbol") }} style={{ width:"15%" ,height:"5vh",marginLeft:"1%"}} >symbol</button>

</div>
</>
}
export default MainKeybord

