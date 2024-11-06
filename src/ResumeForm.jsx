import { useRef } from "react";

function ResumeForm({setResumerData, handleSubmit}){
    const linkContainerRef = useRef(null);
    const educationContainerRef = useRef(null);
    const skillsContainerRef = useRef(null);
    const refContainerRef = useRef(null);

    let linksNum = 0; 
    let eduNum = 0;
    let skillsNum = 0;
    let refNum = 0;

    function addLinks(event){
        event.preventDefault()
        
        if(linksNum < 5){
            linksNum += 1

          const div = document.createElement("div");

          const label = document.createElement("label");
            label.setAttribute("htmlFor", linksNum);
            label.textContent = "website:";

          const input = document.createElement("input");
            input.setAttribute( "id", linksNum);

          const label2 = document.createElement("label");
            label2.setAttribute("htmlFor", linksNum + 2)
            label2.textContent = "url:"

            const input2 = document.createElement("input");
                input2.setAttribute("id", linksNum + 2)

          linkContainerRef.current.appendChild(div)  
            div.appendChild(label)
            label.appendChild(input)

          div.appendChild(label2);
          label2.appendChild(input2)  }

          console.log(linksNum)
        };    

        

        function addEducation(event){
          event.preventDefault()
          
          if(eduNum < 5){
            eduNum +=1
            const div = document.createElement("div");
  
            const label = document.createElement("label");
              label.setAttribute("htmlFor", eduNum);
              label.textContent = "Date";
  
            const input = document.createElement("input");
              input.setAttribute( "id", eduNum);
  
            const label2 = document.createElement("label");
              label2.setAttribute("htmlFor", eduNum + 2)
              label2.textContent = "School:"
  
              const input2 = document.createElement("input");
                  input2.setAttribute("id", eduNum +2)

              const label3 = document.createElement("label");
              label3.setAttribute("htmlFor", eduNum + 4)
              label3.textContent = "Profecional Development:"

              const input3 = document.createElement("textarea");
              input3.setAttribute("id", eduNum + 4)
  
            educationContainerRef.current.appendChild(div)  
              div.appendChild(label)
              label.appendChild(input)
  
            div.appendChild(label2);
            label2.appendChild(input2)  

            div.appendChild(label3)
            label3.appendChild(input3)
          }

          console.log(eduNum)
          };    

      function addSkills(event){
          event.preventDefault()
          if(skillsNum < 10){
            skillsNum += 1

          const div = document.createElement('div');
          
          const label = document.createElement('label');
          label.setAttribute("id", skillsNum);

          const input = document.createElement('input');
          input.setAttribute("id", skillsNum);

          skillsContainerRef.current.appendChild(div)
          div.appendChild(label)
          label.appendChild(input);
          }
        }

        function addReferences(event){
          event.preventDefault()
            if(refNum < 3){
              refNum += 1
  
            const div = document.createElement("div");
  
            const label = document.createElement("label");
              label.setAttribute("htmlFor", refNum);
              label.textContent = "name";
  
            const input = document.createElement("input");
              input.setAttribute( "id", refNum);
  
            const label2 = document.createElement("label");
              label2.setAttribute("htmlFor", refNum + 2)
              label2.textContent = "phone:"
  
              const input2 = document.createElement("input");
                  input2.setAttribute("id", refNum + 2)

              const label3 = document.createElement("label");
              label3.setAttribute("htmlFor", refNum + 4)
              label3.textContent = "Email:"

              const input3 = document.createElement("input");
              input3.setAttribute("id", refNum + 4)
  
            refContainerRef.current.appendChild(div)  
              div.appendChild(label)
              label.appendChild(input)
  
            div.appendChild(label2);
            label2.appendChild(input2)  

            div.appendChild(label3)
            label3.appendChild(input3)

            }

            console.log(refNum)
            
        }


    return (
        <>
        <h1>Resume</h1>
        <form onSubmit={handleSubmit


        }>
            <fieldset>
                <label htmlFor="firstName">First name: <input type="text" id="firstName" required/></label>
                <label htmlFor="lastName">Last name: <input  type="text" id="lastName" required/></label>
                <label htmlFor="address">Address:<input type="text" name="address" id="address" required/></label>
                <label htmlFor="phone">Phone:<input type="text" id="phone" required/></label>
                <label htmlFor="email">Email:<input type="text" name="email" id="email" required/></label>
            </fieldset>
            <fieldset className="links" >
            <div>
                <h3>Links:</h3>
              </div>
                <div ref={linkContainerRef}>
                </div>
                <button onClick={addLinks}>+</button>
            </fieldset>
            <fieldset>
              <div>
                <h3>Skill:</h3>
              </div>
              <div ref={skillsContainerRef}></div>
              <button onClick={addSkills}>+</button>
            </fieldset>
            <fieldset>
              <div>
                <h3>Education:</h3>
              </div>
              <div ref={educationContainerRef}>
              </div>
              <button onClick={addEducation}>+</button>
            </fieldset>
            <fieldset>
              <div>
                <h3>References:</h3>
              </div>
              <div ref={refContainerRef}></div>
            <button onClick={addReferences}>+</button>
            </fieldset>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default ResumeForm;