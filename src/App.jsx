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

const handleEditResume = () => {
  setStage("edit")
};

console.log(resumeData)

  return (
    <>
      {stage === "start" && (
        <button onClick={handleCreateResume}>Create Resume</button>
      )}

      { stage === "form" && (
        <ResumeForm  setResumeData={setResumeData} setStage={setStage}/>
      )}
      {stage === "resume" && resumeData && ( 
        <>
        <Contacts resumeData={resumeData}/>
        <Links resumeData={resumeData}/>
        <Profile resumeData={resumeData}/>
        <Skills resumeData={resumeData}/>
        <Education resumeData={resumeData} />
        <Footer resumeData={resumeData} />
        <button onClick={handleEditResume}>Edit</button>
        </>
      )}      
      {stage === "edit" && (
        <ResumeForm setResumeData={setResumeData} setStage={setStage} />
      )}
    </>
  )
}

export default App
