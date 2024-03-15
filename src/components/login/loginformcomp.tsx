import React, { ChangeEvent, useLayoutEffect, useState} from "react"
import { useNavigate } from "react-router-dom"


type userdetails = {
    username: string,
    password: string,
}

export const nameContext = React.createContext("")

const FormLoginComp = () => {
    const Navigate = useNavigate()
    const [decixBoo, setDeciBoo] = useState(false)
    const [loginDetails, setLoginDetails] = useState<userdetails>({
        username: "",
        password: "",
    })

    const userNameFunc = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginDetails({ ...loginDetails, username: e.target.value })
    }
    const userPasswordFunc = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginDetails({ ...loginDetails, password: e.target.value })
    }

    useLayoutEffect(() => {
        localStorage.setItem("logged-username", loginDetails.username)
        localStorage.setItem("logged-userpw", loginDetails.password)
    }, [loginDetails])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (loginDetails.username !== "" && loginDetails.password !== "") {
            Navigate("/userdashboard")
        } else if (loginDetails.username === "" || loginDetails.password === "") {
            setTimeout(() => { setDeciBoo((prev) => !prev) }, 1000)
            clearTimeout(1000)
        }
        console.log(loginDetails)
    }

    return (
        <React.Fragment>
            <nameContext.Provider value={loginDetails.username}>
                <div className="container h-screen w-1/2 relative">
                    <div className="container flex flex-col mx-auto absolute top-40 ">
                        <div className=" w-4/5 mx-auto my-3">
                            <h1 className="text-cyan-800 font-extrabold my-5 font-san text-3xl">Welcome!</h1>
                            <p className="text-slate-700 font-bold font-light my-5 font-sans text-base">Enter Details to login</p>
                        </div>
                        <form onSubmit={(e) => handleSubmit(e)} className="container w-4/5 flex flex-col mx-auto">
                            <input className="w-full outline-0 h-11 my-3 border-2 border-slate-200 font-mono text-xl pl-3" placeholder="username" type="text" name="username" onChange={userNameFunc} />
                            <input className="w-full outline-0 h-11 my-3 border-2 border-slate-200 font-mono text-xl pl-3" placeholder="password" type="password" name="password" onChange={userPasswordFunc} />
                            {decixBoo && <div className="relative w-full text-red-600 font-sans"><p>one or more input field empty!</p></div>}
                            <div className="ml-0 text-cyan-400 font-serif font-normal my-2 uppercase text-sm">forgot password?</div>
                            <button className="w-full bg-cyan-400 my-3 font-medium rounded-md text-base font-serif h-12 uppercase text-white" type="submit">log in</button>
                        </form>
                    </div>
                </div>
            </nameContext.Provider>

        </React.Fragment>
    )
}

export default FormLoginComp;