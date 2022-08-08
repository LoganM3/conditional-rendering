
import { useState } from 'react';
import Loading from './Loading';
import Loaded from './Loaded';
import './App.css';

function App() {
  const [isLoaded,setIsLoaded] = useState(false)
  const [objectExample,setObjectExample] = useState({name: "name of object"})//dont need this
  const [username,SetUsername] = useState("")
  //const ternary = isLoaded ? "Yes" : "No 😨"
  const numbers = [1,2,3,4,5,6,7,8,9,0]

  return (
    <div className="App">
      <h1>Username is: {username !=="" ? username: 'Guest'} </h1>
      <h1>Username is: {username || 'Guest'} </h1>
      <h1>{
      isLoaded && 
      <>
      {numbers.map((num)=>{
        return num + "&"
      })}
      <Loading/>
      </>
}</h1>


    

{
  isLoaded
  ?
  <Loaded/>
  :
  <Loading/>
  
}
      <h1>isLoaded = {String(isLoaded)}</h1>
      <h1>{objectExample.name}</h1>
      <h1>{isLoaded ? "Yes" : "No 😨"}</h1>
      <button onClick={()=>{
        setIsLoaded(!isLoaded)
      }}>Change Loaded</button>
      
    </div>
  );
}

export default App;
