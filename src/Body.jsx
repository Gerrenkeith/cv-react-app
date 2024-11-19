function Skills({ resumeData }){
        const skillsDisplay = resumeData.Skills.map( ( skill, index ) => ( <li key={index}>{skill}</li>))


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

    const displayEdu = resumeData.Edu.map((edu, index) => (
       <div key={index}> 
            <div>
                <h4>{edu.startDate} - {edu.endDate}</h4>
            </div>
            <div>
                <h4>{edu.school}</h4>
                <p>{edu.development}</p>
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
        </>
    )
}

export { Education, Skills};