const Hebrew=({addLetter})=>{


    const HebrewCase = ['/', "'", 'ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ',
        'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך','ף',
        'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ','ת','ץ','.']

    return (
        <div style={{gridRow:"2/5",gridColumn:"1/8",width:"99%" ,display: "grid", gridTemplateRows:  "35% 35% 35%", gridTemplateColumns: "10% 10% 10% 10% 10% 10% 10% 10% 10% 10%",
            marginLeft:"0.5%",height:"50%"
        }}>
            {HebrewCase.map(letter => (
                <button key={letter} onClick={() => addLetter(letter)} style={{height:"60%",marginTop:"16%" ,marginLeft:"5%", width:"90%" }}>
                    {letter}
                </button>
            ))}
        </div>
    )
}
export default Hebrew