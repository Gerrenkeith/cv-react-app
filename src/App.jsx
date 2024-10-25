import './App.css'
import { Contacts, Links, Profile } from "./Header.jsx" 
import { Education, Skills } from "./Body.jsx"
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Contacts />
      <Links />
      <Profile />    
      <Skills />
      <Education />
    </>
  )
}

export default App
