import { useState } from "react"
import AddUsers from "./AddUsers"
import MainGame from "./MainGame"

const Mainget100=()=>{

const [statusGame, setStatusGame]=useState(1)
const [users, setUsers]=useState([])
const [activUser,setActivUser]=useState(1)
const [winners, setWinners] = useState([]);



const addUser = (name)=>{
    const obj={
        id:users.length+1,
        name,
        steps:0,
        num:Math.floor(Math.random()*100),
        disabled: true,
        win: false,
    }
    console.log(obj.id)

    setUsers([...users , obj])
    console.log(users)
}


    const updateUser=(user)=>{
        let nextPlayer

    if (user.num === 100) {
        setWinners([...winners, user]);
      }
  
    nextPlayer=users.find((u)=>{
     return u.id > user.id && !u.win
    })
    if(!nextPlayer)
    {
     nextPlayer=users.find((u)=>{
         return u.id <= user.id && !u.win
        })
    }
    const userMap=users.map((u)=>{
     if(u.id===user.id)
     {
         if (u.id === nextPlayer.id) {
             return { ...user, disabled: false }
         }
         return user
     }
     else
     {
         if (u.id === nextPlayer.id) {
             return { ...u, disabled: false }
         }
         return u
     }
    })
    setUsers(userMap)
 }

const startGameClick=()=>{
    setStatusGame(2)
    const usersMap=users.map(user=>{
        if(user.id===activUser){
            console.log("user.id first "+user.id)
            return {...user,disabled:false}
        }else{
            return user
        }
      
    })
    console.log(usersMap)
    setUsers(usersMap)
}

const LeaveUser = (user) => {
    let newUsers = users.filter((u) => u.id !== user.id)
    newUsers = newUsers.map((u, index) => ({
        ...u,
        id: index + 1,
    }))
    let userIndex = -1;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === user.id) {
            userIndex = i;
            break;
        }
    }
    const nextPlayerIndex = userIndex < newUsers.length ? userIndex : 0

    const updatedUsers = newUsers.map((u, index) => ({
        ...u,
        disabled: index === nextPlayerIndex ? false : true,
    }))

    setUsers(updatedUsers)
}

 const newGameClick=()=>{
    setStatusGame(1)
    setUsers([])
}

    return <>
    <h1 id="title">Main Get100</h1>
    <h2>Num playes {users.length}</h2>
    <div className="wins">
        <h3>Wins!!:</h3>
        <ul>
          {winners.map((winner) => (
            <li key={winner.id}>
              {winner.name} guessed the number 100! Steps- {winner.steps}
        </li>
          ))}
        </ul>
      </div>
    <button onClick={(startGameClick)} className={(statusGame===1)?"B-Add-Start1":"B-Add-Start2"} >Start Game</button>
    <button onClick={(newGameClick)} className={(statusGame===2)?"B-New1":"B-New2"}>New Game</button>
    {statusGame===1 && <AddUsers addUser={addUser}/>}
    {statusGame===2 && <MainGame updateUser={updateUser} users={users} LeaveUser={LeaveUser} />}
    </>
    }
export default Mainget100