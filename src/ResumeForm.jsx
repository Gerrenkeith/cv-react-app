import { useRef } from "react";

function ResumeForm({setResumerData, handleSubmit}){
    const linkContainerRef = useRef(null);
    const educationContainerRef = useRef(null);
    const skillsContainerRef = useRef(null);
    const refContainerRef = useRef(null);

    function addLinks(event){
        event.preventDefault()
          const idNum = crypto.randomUUID();
          const idNum2 = crypto.randomUUID();

          const div = document.createElement("div");

          const label = document.createElement("label");
            label.setAttribute("htmlFor", idNum);
            label.textContent = "website:";

          const input = document.createElement("input");
            input.setAttribute( "id", idNum);

          const label2 = document.createElement("label");
            label2.setAttribute("htmlFor", idNum2)
            label2.textContent = "url:"

            const input2 = document.createElement("input");
                input2.setAttribute("id", idNum2)

          linkContainerRef.current.appendChild(div)  
            div.appendChild(label)
            label.appendChild(input)

          div.appendChild(label2);
          label2.appendChild(input2)  
        };    

        function addEducation(event){
          event.preventDefault()
            const idNum = crypto.randomUUID();
            const idNum2 = crypto.randomUUID();
            const idNum3 = crypto.randomUUID();
  
            const div = document.createElement("div");
  
            const label = document.createElement("label");
              label.setAttribute("htmlFor", idNum);
              label.textContent = "Date";
  
            const input = document.createElement("input");
              input.setAttribute( "id", idNum);
  
            const label2 = document.createElement("label");
              label2.setAttribute("htmlFor", idNum2)
              label2.textContent = "School:"
  
              const input2 = document.createElement("input");
                  input2.setAttribute("id", idNum2)

              const label3 = document.createElement("label");
              label3.setAttribute("htmlFor", idNum3)
              label3.textContent = "Profecional Development:"

              const input3 = document.createElement("textarea");
              input3.setAttribute("id", idNum3)
  
            educationContainerRef.current.appendChild(div)  
              div.appendChild(label)
              label.appendChild(input)
  
            div.appendChild(label2);
            label2.appendChild(input2)  

            div.appendChild(label3)
            label3.appendChild(input3)
          };    

      function addSkills(event){
          event.preventDefault()
          const idNum = crypto.randomUUID();

          const div = document.createElement('div');
          
          const label = document.createElement('label');
          label.setAttribute("id", idNum);

          const input = document.createElement('input');
          input.setAttribute("id", idNum);

          skillsContainerRef.current.appendChild(div)
          div.appendChild(label)
          label.appendChild(input);
          
        }

        function addReferences(event){
          event.preventDefault()
            const idNum = crypto.randomUUID();
            const idNum2 = crypto.randomUUID();
            const idNum3 = crypto.randomUUID();
  
            const div = document.createElement("div");
  
            const label = document.createElement("label");
              label.setAttribute("htmlFor", idNum);
              label.textContent = "name";
  
            const input = document.createElement("input");
              input.setAttribute( "id", idNum);
  
            const label2 = document.createElement("label");
              label2.setAttribute("htmlFor", idNum2)
              label2.textContent = "phone:"
  
              const input2 = document.createElement("input");
                  input2.setAttribute("id", idNum2)

              const label3 = document.createElement("label");
              label3.setAttribute("htmlFor", idNum3)
              label3.textContent = "Email:"

              const input3 = document.createElement("input");
              input3.setAttribute("id", idNum3)
  
            refContainerRef.current.appendChild(div)  
              div.appendChild(label)
              label.appendChild(input)
  
            div.appendChild(label2);
            label2.appendChild(input2)  

            div.appendChild(label3)
            label3.appendChild(input3)
        }


    return (
        <>
        <h1>Resume</h1>
        <form onSubmit={handleSubmit}>
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