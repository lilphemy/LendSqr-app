import React from "react"
import loginImg from "../../Images/pablo-sign-in 1.png"
import LendLogo from "../../Images/Group.svg"




const LoginViewComp = () => {

    return (
        <React.Fragment>
            <div className="container h-screen w-1/2 bg-white relative border-4 border-blue-400">
                <div className="container h-3/5 flex flex-col absolute top-32">
                    <img className="h-20 w-40 ml-16" src={LendLogo} />
                    <img className="h-56 w-3/5 mx-auto" src={loginImg} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginViewComp;