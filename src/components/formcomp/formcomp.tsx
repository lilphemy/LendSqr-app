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
            <div className="container h-screen w-1/2 relative">
                <div className="container flex flex-col mx-auto absolute top-40 ">
                    <div className=" w-4/5 mx-auto my-3">
                        <h1 className="text-cyan-800 font-extrabold my-5 font-san text-3xl">Welcome!</h1>
                        <p className="text-slate-700 font-bold font-light my-5 font-sans text-base">Enter Details to login</p>
                    </div>
                    <form className="container w-4/5 flex flex-col mx-auto">
                        <input className="w-full outline-0 h-11 my-3 border-2 border-slate-200 font-mono text-xl" placeholder="username" type="text" name="username" onChange={userNameFunc} />
                        <input className="w-full outline-0 h-11 my-3 border-2 border-slate-200 font-mono text-xl" placeholder="password" type="text" name="password" onChange={userPasswordFunc} />
                        <div className="ml-0 text-cyan-400 font-serif font-normal my-2 uppercase text-sm">forgot password?</div>
                        <button className="w-full bg-cyan-400 my-3 font-medium rounded-md text-base font-serif h-12 uppercase text-white" type="submit">log in</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FormLoginComp;