import './App.css'
import { useState } from 'react' 
import ResumeForm from './ResumeForm.jsx'
import {Contacts, Links, Profile} from './Header.jsx';
import { Skills, Education } from './Body.jsx';
import Footer from './Footer.jsx';



function App() {
  const [ stage, setStage ] = useState("start")
  const [resumeData, setResumeData] = useState(null);

  const handleCreateResume = () => {
    setStage("form");
  }

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = {
    firstName: event.target.firstName.value,
    lastName: event.target.lastName.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
  
  };
  setResumeData(formData); // Save form data as resume data
  setStage("resume"); // Switch to resume stage
};

console.log(resumeData)

  return (
    <>
      {stage === "start" && (
        <button onClick={handleCreateResume}>Create Resume</button>
      )}

      { stage === "form" && (
        <ResumeForm  setInfo={setResumeData} handleSubmit={handleSubmit}/>
      )}
      {stage === "resume" && resumeData && ( 
        <>
        <Contacts resumeData={resumeData}/>
        <Links resumeData={resumeData}/>
        <Profile resumeData={resumeData}/>
        <Skills resumeData={resumeData}/>
        <Education resumeData={resumeData} />
        <Footer resumeData={resumeData} />
        </>
      )}      
    </>
  )
}

export default App
