import { useState } from "react"

const Size=({changeSize})=>{

    const [size,setSize]=useState(15)


return (
<div >
<select onChange={(event)=>changeSize(event.target.value)}>
        

        <option value="25">25</option>
        <option value="30">30</option>
        <option value="35">35</option>
        <option value="40">40</option>
</select>
</div>
)
}
export default Size

