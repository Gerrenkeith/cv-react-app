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
    Links: [],
    Skills: [],
    Edu: [],
    Ref: []
  };

  const linksArray = [
    { website: event.target.linkOne?.value, url: event.target.linkSix?.value},
    {website: event.target.linkTwo?.value, url: event.target.linkSeven?.value},
    {website: event.target.linkThree?.value, url: event.target.linkEight?.value}, 
    {website: event.target.linkFour?.value, url: event.target.linkNine?.value},
    {website: event.target.linkFive?.value, url: event.target.linkTen?.value}].filter(link => link.website)
    
    const skillsArray = [
      event.target.skillOne?.value, 
      event.target.skillTwo?.value,
      event.target.skillThree?.value,
      event.target.skillFour?.value,
      event.target.skillFive?.value,
      event.target.skillSix?.value,
      event.target.skillSeven?.value,
      event.target.skillEight?.value,
      event.target.skillNine?.value,
      event.target.skillTen?.value
    ].filter(skill => skill)

    const eduArray = [
      { date: event.target.eduOne?.value, school: event.target.eduSix?.value, edu: event.target.eduEleven?.value },
      { date: event.target.eduTwo?.value, school: event.target.eduSeven?.value, edu: event.target.eduTwelve?.value },
      { date: event.target.eduThree?.value, school: event.target.eduEight?.value, edu: event.target.eduThirteen?.value },
      { date: event.target.eduFour?.value, school: event.target.eduNine?.value, edu: event.target.eduFourteen?.value },
      { date: event.target.eduFive?.value, school: event.target.eduTen?.value, edu: event.target.eduFifteen?.value }
    ].filter(edu => edu.date);

    const refArray = [
      { name: event.target.refOne?.value, phone: event.target.refSix?.value, email: event.target.refEleven?.value },
      { name: event.target.refTwo?.value, phone: event.target.refSeven?.value, email: event.target.refTwelve?.value },
      { name: event.target.refThree?.value, phone: event.target.refEight?.value, email: event.target.refThirteen?.value },
    ].filter( ref => ref.name)

  formData.Links = linksArray;
  formData.Skills = skillsArray;
  formData.Edu = eduArray;
  formData.Ref = refArray;
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
