function Contacts(){

    return (
        <>
         <h1>Gerren Ballard</h1>
         <div>
            <address>6758 Legato Curve, San Antonio, 78252, United States</address>
            <p>903.357.8834</p>
            <p>gerren.keith23@gmail.com</p>
         </div>
         <hr></hr>
        </>
    )
}


function Links(){

    return (
        <>
            <div>
                <div>
                    <h3>Links</h3>                   
                 </div>     
                 <div>
                    <ul>
                        <li><a>LinkedIn</a></li>
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

