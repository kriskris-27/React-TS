
interface UserData{
    username:string;
    age?:number;
}

const UserProfile = ({username,age}:UserData)=>{
return (
    <>
    <p>Name:{username}</p>
    {age && <p>Age:{age}</p>}
    </>
)
}
export default UserProfile;