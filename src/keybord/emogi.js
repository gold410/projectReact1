import { useState } from "react"
const Emogi = ({ addLetter }) => {


    const emojiCase = ['😜', '😍', '😭','🤩','🫣','😂','☹️','😆','😘','😁',
        '🫶','🫰','👋','👌','🤝','🤞','🤌','👍','👇','👆',
        '❤️','🩷','💛','💚','💙','🩵','💜','🤎','🖤','🩶']

    return (
        <div style={{gridRow:"2/5",gridColumn:"1/8",width:"99%" ,display: "grid", gridTemplateRows: "30% 30% 30%", gridTemplateColumns: "10% 10% 10% 10% 10% 10% 10% 10% 10% 10%",
            marginLeft:"0.5%",height:"50%"
        }}>
            {emojiCase.map(letter => (
                <button key={letter} onClick={() => addLetter(letter)} style={{height:"80%",marginTop:"16%" ,marginLeft:"5%", width:"90%" }}>
                    {letter}
                </button>
            ))}
        </div>
    )

}
export default Emogi


