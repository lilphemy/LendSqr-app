import React from "react"

function BackgroundComp ({children}:{children: React.ReactNode}) {

    return(
        <React.Fragment>
            <div className="container mx-auto bg-red-500 ">
                <h3 className="text-yellow-400 font-serif">I am holding all children!</h3>
                {children} 
            </div>
        </React.Fragment>
    )
}

export default BackgroundComp