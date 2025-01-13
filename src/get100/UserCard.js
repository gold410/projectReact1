
 import { useState } from "react"

    const UserCard=({user,updateUser,LeaveUser})=>{
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const [winners, setWinners] = useState([])
    const handleButtonClick = (operation) => {
        let newNum
        switch (operation) {
            case "+":
                newNum = user.num + 1
                break
            case "-":
                newNum = user.num - 1
                break
            case "*":
                newNum = user.num * 2
                break
            case "/":
                newNum = user.num / 2
                break
            default:
                return
        }
        let newUser
        if(newNum===100)
        {

            newUser = { ...user, num: newNum, steps: user.steps + 1, disabled: true, win:true } 
            if (newUser.win) {
                setWinners([...winners, newUser]);
              }
            
        }
        else{
            newUser = { ...user, num: newNum, steps: user.steps + 1, disabled: true }
        }
        
         
        updateUser(newUser)
    }

return <div>
    <div id="user">
    {user.name}
    <h1>{user.num}</h1>
    <h6>steps {user.steps}</h6>
            <div style={{display:user.win?"none":"block"}} >
            <button onClick={() => handleButtonClick('+')} disabled={user.disabled}>+1</button>
            <button onClick={() => handleButtonClick('-')} disabled={user.disabled}>-1</button>
            <button onClick={() => handleButtonClick('*')} disabled={user.disabled}>*2</button>
            <button onClick={() => handleButtonClick('/')} disabled={user.disabled}>/2</button>
            <button onClick={() => LeaveUser(user)}>Leave</button>
            </div>
            <div id="win" style={{display:user.win?"block":"none"}}>win!!!</div>
</div>


</div>
}
export default UserCard