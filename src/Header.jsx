function Contacts({info}){

    return (
        <>
         <h1>{info.name}</h1>
         <div>
            <address>{info.address}</address>
            <p>{info.phone}</p>
            <p>{info.email}</p>
         </div>
         <hr/>




        </>
    )
}


function Links({info}){
   const links = info.links.map((link) => ( <li>{link}</li>))
    return (
        <>
            <div>
                <div>
                    <h3>Links</h3>                   
                 </div>     
                 <div>
                    <ul>
                        <li><a>{info.links}</a></li>
                        <li><a>Github</a></li>
                    </ul>
                </div>       
            </div>
            <hr/>
        </>
    )
}

function Profile(){

    return (
        <>
            <div>
                <h3>Profile</h3>
            </div>
            <div>
                <p>Passionate web developer with experience in designing, implementing, testing, and maintaining web applications. Proficient in technologies, such as HTML, CSS, JavaScript, and React.js. </p>
            </div>
            <hr/>
        </>
    )
}

export { Contacts, Links, Profile };

