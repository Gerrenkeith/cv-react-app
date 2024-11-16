import { useRef } from "react";

function ResumeForm({handleSubmit}){
    const linkContainerRef = useRef(null);
    const educationContainerRef = useRef(null);
    const skillsContainerRef = useRef(null);
    const refContainerRef = useRef(null);

    const idNum = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",  "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"]
    let linksNum = 0; 
    let eduNum = 1;
    let skillsNum = 4;
    let refNum = 0;

    function addLinks(event){
        event.preventDefault()
        
        if(linksNum < 5){
           

          const div = document.createElement("div");

          const label = document.createElement("label");
            label.setAttribute("htmlFor", `link${idNum[linksNum]}`);
            label.textContent = "website:";

          const input = document.createElement("input");
            input.setAttribute( "id", `link${idNum[linksNum]}`);

          const label2 = document.createElement("label");
            label2.setAttribute("htmlFor", `link${idNum[linksNum + 5]}`)
            label2.textContent = "url:"

            const input2 = document.createElement("input");
                input2.setAttribute("id", `link${idNum[linksNum + 5]}`)

          linkContainerRef.current.appendChild(div)  
            div.appendChild(label)
            label.appendChild(input)

          div.appendChild(label2);
          label2.appendChild(input2)  }

          console.log(linksNum) 
          linksNum += 1
        };    

      function addSkills(event){
          event.preventDefault()
          if(skillsNum < 10){
            

          const div = document.createElement('div');
          
          const label = document.createElement('label');
          label.setAttribute("id", `skill${idNum[skillsNum]}`);

          const input = document.createElement('input');
          input.setAttribute("id", `skill${idNum[skillsNum]}`)
         

          skillsContainerRef.current.appendChild(div)
          div.appendChild(label)
          label.appendChild(input);
           skillsNum += 1
          }
        }

        function addEducation(event){
          event.preventDefault()
          
          if(eduNum < 5){
           
            const div = document.createElement("div");
  
            const label = document.createElement("label");
              label.setAttribute("htmlFor", `edu${idNum[eduNum]}`);
              label.textContent = "Start Date";
  
            const input = document.createElement("input");
              input.setAttribute( "id", `edu${idNum[eduNum]}`);
              input.setAttribute("type", "date")
  
            const label2 = document.createElement("label");
              label2.setAttribute("htmlFor", `edu${idNum[eduNum + 10]}`)
              label2.textContent = "School/Company:"
  
              const input2 = document.createElement("input");
                  input2.setAttribute("id", `edu${idNum[eduNum + 10]}`)

              const label3 = document.createElement("label");
              label3.setAttribute("htmlFor", `edu${idNum[eduNum + 15]}`)
              label3.textContent = "Professional Development:"

              const input3 = document.createElement("textarea");
              input3.setAttribute("id", `edu${idNum[eduNum + 15]}`)

              const label4 = document.createElement("label")
              label4.setAttribute("htmlFor", `edu${idNum[eduNum + 5]}`)
              label4.textContent = "End Date"

              const input4 = document.createElement("input" )
              input4.setAttribute("id", `edu${idNum[eduNum + 5]}`)
              input4.setAttribute("type", "date")
  
            educationContainerRef.current.appendChild(div)  
              div.appendChild(label)
              label.appendChild(input)
            
              div.appendChild(label4)
              label4.appendChild(input4)

            div.appendChild(label2);
            label2.appendChild(input2)  

            div.appendChild(label3)
            label3.appendChild(input3) 
            eduNum += 1
          }

          console.log(eduNum + 4)
          };    

        function addReferences(event){
          event.preventDefault()
            if(refNum < 3){
             
  
            const div = document.createElement("div");
  
            const label = document.createElement("label");
              label.setAttribute("htmlFor", `ref${idNum[refNum]}`);
              label.textContent = "name";
  
            const input = document.createElement("input");
              input.setAttribute( "id", `ref${idNum[refNum]}`);
              input.setAttribute("placeholder", "Jon Snow")
  
            const label2 = document.createElement("label");
              label2.setAttribute("htmlFor", `ref${idNum[refNum + 5]}`)
              label2.textContent = "phone:"
  
              const input2 = document.createElement("input");
                  input2.setAttribute("id", `ref${idNum[refNum + 5]}`)
                  input2.setAttribute("type", "number")
                  input2.setAttribute("placeholder", "xxx-xxx-xxxx")

              const label3 = document.createElement("label");
              label3.setAttribute("htmlFor", `ref${idNum[refNum + 10]}`)
              label3.textContent = "Email:"

              const input3 = document.createElement("input");
              input3.setAttribute("id", `ref${idNum[refNum + 10]}`)
              input3.setAttribute("type", "email")
              input3.setAttribute("placeholder", "abc@resume.com")
  
            refContainerRef.current.appendChild(div)  
              div.appendChild(label)
              label.appendChild(input)
  
            div.appendChild(label2);
            label2.appendChild(input2)  

            div.appendChild(label3)
            label3.appendChild(input3)

            }

            console.log(refNum)
             refNum += 1
        }


    return (
        <>
        <h1>Resume</h1>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="firstName">First name: <input type="text" id="firstName" placeholder="Jon" required/></label>
                <label htmlFor="lastName">Last name: <input  type="text" id="lastName" placeholder="Snow" required/></label>
                <label htmlFor="address">Address:<input type="text" name="address" id="address" placeholder="123 Crimson Comet Way, Central City,  Missouri 64030 " required/></label>
                <label htmlFor="phone">Phone:<input type="text" id="phone" placeholder="xxx-xxx-xxxx" required/></label>
                <label htmlFor="email">Email:<input type="email" name="email" id="email" placeholder="abc@resume.com" required/></label>
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
              <div ref={skillsContainerRef}>
                <div>
                  <label htmlFor="skillOne">
                    <input type="text"  id="skillOne" required/>
                  </label>
                </div>
                <div>
                  <label htmlFor="skillTwo">
                    <input type="text"  id="skilltwo" required/>
                  </label>
                </div>
                <div>
                  <label htmlFor="skillThree">
                    <input type="text"  id="skillThree" required/>
                  </label>
                </div>
                <div>
                  <label htmlFor="skillFour">
                    <input type="text"  id="skillFour" required/>
                  </label>
                </div>
              </div>
              <button onClick={addSkills}>+</button>
            </fieldset>
            <fieldset>
              <div>
                <h3>Education:</h3>
              </div>
              <div ref={educationContainerRef}>
                <div>
                  <label htmlFor="eduOne">
                   Start Date:
                    <input type="date" id="eduOne" required/>
                  </label>
                  <label htmlFor="eduSix">
                    End Date:
                    <input type="date" id="eduSix" />
                  </label>
                  <label htmlFor="eduEleven">
                    School/Company:
                    <input type="text" id="eduEleven" required/>
                  </label>
                  <label htmlFor="eduSixteen">
                    Professional Development:
                    <textarea type="text"  id="eduSixteen" required/>
                  </label>
                </div>  
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