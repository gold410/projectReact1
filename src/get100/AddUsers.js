import { useState } from "react"

const AddUsers=({addUser})=>{

const [name,setName]=useState("")

return<div className="add-users" style={{marginTop: "50px",border:"3px, solid, black"}}>
<h1 style={{ color:"cornflowerblue"}}>Add users</h1>

enter the user name
<br/>
<input onChange={(e)=>{setName(e.target.value)}} type="text" />
<button className="BAdd" onClick={()=>{addUser(name)}} >Add User</button>
{name}
</div>
}
export default AddUsers