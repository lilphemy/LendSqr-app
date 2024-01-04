import React, { ChangeEvent, useState } from "react"


type userdetails = {
    username: string,
    password: string,
}

const FormLoginComp = () => {
    const [userDetails, setUserDetails] = useState<userdetails>({
        username: "",
        password: "",
    })

    const userNameFunc = (e: ChangeEvent<HTMLInputElement>) => {
        setUserDetails({ ...userDetails, username: e.target.value })
    }
    const userPasswordFunc = (e: ChangeEvent<HTMLInputElement>) => {
        setUserDetails({ ...userDetails, password: e.target.value })
    }

    return (
        <React.Fragment>
            <div className="container h-screen w-1/2 border-4 relative border-blue-500">
                <div className="container flex flex-col mx-auto absolute top-40 ">
                    <div className=" w-4/5 mx-auto my-5">
                        <h1 className="text-cyan-800 font-extrabold my-5 font-san text-3xl">Welcome!</h1>
                        <p className="text-cyan-200 font-light my-5 font-mono text-xl">Enter Details to login</p>
                    </div>
                    <form className="container w-4/5 flex flex-col mx-auto border-4 border-lime-600">
                        <input className="mx-auto my-5 border-lime-900 font-mono text-xl" placeholder="username" type="text" name="username" onChange={userNameFunc} />
                        <input placeholder="password" type="text" name="password" onChange={userPasswordFunc} />
                        <button type="button">forgot password</button>
                        <button type="submit">log in</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FormLoginComp;