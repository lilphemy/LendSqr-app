import React from "react"
import loginImg from "../../Images/pablo-sign-in 1.png"
import LendLogo from "../../Images/Group.svg"




const LoginViewComp = () => {

    return (
        <React.Fragment>
            <div className="container h-screen w-1/2 bg-white relative">
                <div className="container h-3/5 flex flex-col absolute top-32">
                    <div className="container">
                        <img className="h-20 w-40 ml-16" src={LendLogo} />
                    </div>
                    <div className="container mt-12 h-80">
                        <img className="h-full w-4/5 mx-auto mt-15" src={loginImg} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginViewComp;