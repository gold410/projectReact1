const Lower = ({ addLetter }) => {


    const lowerCase = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
        'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',';',
        'z', 'x', 'c', 'v', 'b', 'n', 'm',',','.','/']

    return (
        <div style={{gridRow:"2/5",gridColumn:"1/8",width:"99%" ,display: "grid", gridTemplateRows: "35% 35% 35%", gridTemplateColumns: "10% 10% 10% 10% 10% 10% 10% 10% 10% 10%",
            marginLeft:"0.5%",height:"50%"
        }}>
            {lowerCase.map(letter => (
                <button key={letter} onClick={() => addLetter(letter)} style={{height:"60%",marginTop:"16%" ,marginLeft:"5%", width:"90%" }}>
                    {letter}
                </button>
            ))}
        </div>
    )

}
export default Lower