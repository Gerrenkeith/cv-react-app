import './App.css'
import { useState } from 'react' 
import { Contacts, Links, Profile } from "./Header.jsx" 
import { Education, Skills } from "./Body.jsx"
import Footer from './Footer.jsx'
import ResumeForm from './ResumeForm.jsx'

function App() {
  const [ info, setInfo ] = useState({
    firstName: "",
    lastName: "",
    contacts: {
      address: "",
      phone: "",
      email: "",
    },
    Links: [],
    Profile: "",
    Skills: [ ],
    Education: [
  ],
    References: []
  }
);

  return (
    <>
      {/* <Contacts info={info} />
      <Links info={info} />
      <Profile info={info} />    
      <Skills info={info} />
      <Education info={info} />
      <Footer info={info}/> */}
      <ResumeForm />
    </>
  )
}

export default App
