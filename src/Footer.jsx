function Footer({ resumeData }){

    const displayRef = resumeData.Ref.map((ref) => (
        <div key={ref.name}>
            <div>
                <h4>{ref.name}</h4>
            </div>
            <div>
                <p>{ref.phone}</p>
                <p>{ref.email}</p>
            </div>
         </div>
    ))

    return (
        <div>
            <div>
                <h3>References:</h3>
            </div>
                {displayRef}
        </div>
    )
}

export default Footer;