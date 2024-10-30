import './App.css'
import { useState } from 'react' 
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
