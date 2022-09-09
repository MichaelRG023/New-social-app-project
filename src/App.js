
import './App.css';
import {useState, useEffect} from "react"


function App() {


  
  

    
    
    const [username, updateUsername] = useState("")

const [password, updatePassword]= useState("")

const [email, updateEmail]= useState("")

const[userToLogin, updateUserToLoginInfo]=useState(
  {
    username:"",
    password:"",
    email:""
  }
)
const [currentUser, setCurrentUser]= useState(null)
const [loggedInUser, setLoggedInUser]= useState(null)
  console.log("TheseNuts",userToLogin)

    const handleLoginSubmit=(synthEvent)=>{
      synthEvent.preventDefault()

      console.log("BYEBUG")


  fetch("http://localhost:3000/login",
  {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify( userToLogin)

      }
    )
    .then(r => r.json())
    .then(pleaseWorkforUser=>{
      console.log(pleaseWorkforUser)
      setLoggedInUser(pleaseWorkforUser)


    })
    
     }

     const handleUsernameInput=(synthEvent)=>{
      console.log(synthEvent)

      updateUsername(synthEvent.target.value)
    


     }
const handleChangeForUserToLogin=(synthEvent)=>{
console.log(synthEvent)
  updateUserToLoginInfo({...userToLogin,[synthEvent.target.name]:synthEvent.target.value } )

}
const handleEmailInput=(synthEvent)=>{
  console.log(synthEvent)
  updateEmail(synthEvent.target.value)

}

  return (
   <>

   {
    loggedInUser ?
   <h2> You are signed as {loggedInUser.username}!</h2>
   :
   <></>
    } 
  <h1>Login</h1>
<form onSubmit={handleLoginSubmit}> 

  <input type="username"
  onChange={handleChangeForUserToLogin}
  name="username"/>


  <input type="password"
  onChange={handleChangeForUserToLogin} 
  
  name='password'/>

  <input type="email"
  onChange={handleChangeForUserToLogin}
  name='email'/>


<button type= "submit"
  name="submit"/>

</form>



  <h2>SignUp</h2>
  
   

</>
)};

export default App;
