import UserCard from "./UserCard"
const MainGame=({users,updateUser,LeaveUser})=>{

    return<>
    
    <div className="game-container">
     {users.map(user=> <UserCard  key={user.id} id={user.id} updateUser={updateUser} user={user} LeaveUser={LeaveUser}/>)}
     </div>
    </>
    }
    export default MainGame