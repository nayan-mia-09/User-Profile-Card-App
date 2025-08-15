
import UserCard from "./components/UserCard"
import users from "./data"


function App() {

  const greetUser =(name) => {
    alert(`Hello, ${name}!`)
    
   }
  return (
    <>
    <div className="text-center m-5 text-3xl">
      <h1>User Profile Card App</h1>
    </div>
<div className="flex gap-5 my-10 mx-10 py-10 px-10 justify-center ">
  
{
        users.map(user =>(<UserCard 
          key={user.id}
          name={user.name}
          age={user.age}
          profession={user.profession}
          img={user.image}
          onGreet={greetUser}

        />)     )
      }
</div>
      
    </>
  )
}

export default App
