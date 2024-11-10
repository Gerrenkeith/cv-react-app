function Skills({ resumeData }){
        const skillsDisplay = resumeData.Skills.map( ( skill ) => ( <li key={skill}>{skill}</li>))


    return (
        <>
        <div>
                <div>
                    <h3>Skills</h3>
                </div>
                <div>
                    <ul>
                        {skillsDisplay}
                    </ul>
                </div>  
        </div> 
        <hr/>
        </>
    )
}


function Education({ resumeData }){

    const displayEdu = resumeData.Edu.map((edu) => (
       <div key={edu}> 
            <div>
                <h4>{edu.date}</h4>
            </div>
            <div>
                <h4>{edu.school}</h4>
                <p>{edu.edu}</p>
            </div>
        </div>
        ))

    return (
        <>
            <div>
                <h3>Education</h3>
            </div>
            <div className="education">
                <div>
                    { displayEdu }
                </div>
            </div>
            <hr/>
        </>
    )
}

export { Education, Skills};