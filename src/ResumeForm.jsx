import { useRef } from "react";

function ResumeForm(){
    const linkContainerRef = useRef(null);

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
       


        

    

    return (
        <>
        <h1>Resume</h1>
        <form>
            <fieldset>
                <label htmlFor="firstName">First name: <input type="text" id="firstName" required/></label>
                <label htmlFor="lastName">Last name: <input  type="text" id="lastName" required/></label>
                <label htmlFor="address">Address:<input type="text" name="address" id="address" required/></label>
                <label htmlFor="phone">Phone:<input type="text" id="phone" required/></label>
                <label htmlFor="email">Email:<input type="text" name="email" id="email" required/></label>
            </fieldset>
            <fieldset className="links" >
                <div ref={linkContainerRef}>
                </div>
                <button onClick={addLinks}>+</button>
            </fieldset>
        </form>
        </>
    )
}

export default ResumeForm;