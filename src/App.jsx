import './App.css'
import { Contacts, Links, Profile } from "./Header.jsx" 
import { Education } from "./Body.jsx"
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Contacts />
      <Links />
      <Profile />    
      <Education />
    </>
  )
}

export default App
