const NumChar = ({ addLetter }) => {


    const numCharCase = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        '@', '#', '$', '_', '&', '-', '+','=', '%', '^'
        ,'/','*','"',"'", ':', ';', '!','?','(',')']

    return (
        <div style={{gridRow:"2/5",gridColumn:"1/8",width:"99%" ,display: "grid", gridTemplateRows: "35% 35% 35%", gridTemplateColumns: "10% 10% 10% 10% 10% 10% 10% 10% 10% 10%",
            marginLeft:"0.5%",height:"10%"
        }}>
        
            {numCharCase.map(letter => (
                <button key={letter} onClick={() => addLetter(letter)} style={{height:"60%",marginTop:"16%" ,marginLeft:"5%", width:"90%" }}>
                    {letter}
                </button>
            ))}
        </div>
    )

}
export default NumChar