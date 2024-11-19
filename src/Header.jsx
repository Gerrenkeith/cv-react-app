function Contacts({resumeData}){
    console.log(resumeData)
 console.log(resumeData.firstName);
    return (
        <div>
         <h1>{resumeData.firstName}</h1>
         <div>
            <address>{resumeData.address}</address>
            <p>{resumeData.phone}</p>
            <p>{resumeData.email}</p>
         </div>
         <hr/>
        </div>
    )
}


function Links({resumeData}){
   const links = resumeData.Links.map((link, index) => ( <li key={index}><a href={link.url}>{link.website}</a></li>))
   
   if(links.length){
   return (
        <>
            <div>
                <div>
                    <h3>Links</h3>                   
                 </div>     
                 <div>
                    <ul>
                        {links}
                    </ul>
                </div>       
            </div>
            <hr/>
        </>
    )}
}

function Profile({ resumeData }){

    return (
        <>
            <div>
                <h3>Profile</h3>
            </div>
            <div>
                <p>{resumeData.Profile}</p>
            </div>
            <hr/>
        </>
    )
}

export { Contacts, Links, Profile };

