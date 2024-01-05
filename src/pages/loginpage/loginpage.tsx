import React from "react"
import LoginViewComp from "../../components/loginimgcomp/loginview"
import FormLoginComp from "../../components/formcomp/formcomp"


const LoginPageComp = () => {

    return (
        <React.Fragment>
            <div className="container flex flex-row">
                <LoginViewComp />
                <FormLoginComp />
            </div>
        </React.Fragment>
    )
}

export default LoginPageComp