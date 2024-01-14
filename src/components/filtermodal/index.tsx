import React from "react"


const FilterForm = () => {

    return (
        <React.Fragment>
            <div className="absolute bg-white z-28 w-80 h-fit border-2 border-red-40">
            <form className=" bg-white z-40 w-11/12 h-full mx-auto">
                <label className="text">
                    <p className = "my-2 text-blue-200 font-mono">Organisation</p>
                    <input className=" w-11/12 rounded-md p-2 text-base outline-0 py-1 border-2 border-cyan-400 font-sans" type="text" placeholder="organisation" />
                </label>
                <label className="text">
                    <p className = "my-2 text-blue-200 font-mono">Username</p>
                    <input className=" w-11/12 rounded-md p-2 text-base outline-0 py-1 border-2 border-cyan-400 font-sans" type="text" placeholder="username" />
                </label>
                <label className="text">
                    <p className = "my-2 text-blue-200 font-mono">Email</p>
                    <input className=" w-11/12 rounded-md p-2 text-base outline-0 py-1 border-2 border-cyan-400 font-sans" type="email" placeholder="Email" />
                </label>
                <label className="text">
                    <p className = "my-2 text-blue-200 font-mono">Phone number</p>
                    <input className=" w-11/12 rounded-md p-2 text-base outline-0 py-1 border-2 border-cyan-400 font-sans" type="text" placeholder="Phone number" />
                </label>
                <label className="text">
                    <p className = "my-2 text-blue-200 font-mono">Date Joined</p>
                    <input className=" w-11/12 rounded-md p-2 text-base outline-0 py-1 border-2 border-cyan-400 font-sans text-orange-200" type="date" placeholder="Date joined" />
                </label>
                <label className="text">
                    <p className = "my-2 text-blue-200 font-mono">Status</p>
                    <input className=" w-11/12 rounded-md p-2 text-base outline-0 text-base py-1 border-2 border-cyan-400 font-sans" type="text" placeholder="Status" />
                </label>
                <div className="container flex row w-11/12 gap-5 justify-evenly my-3 ">
                    <button className = "w-28 p-2 bg-slate-100 rounded-md capitalize border-3 border-blue-400" type="submit">reset</button>
                    <button className = "w-28 p-2 bg-green-300 rounded-md capitalize text-white border-3 border-blue-400" type="button">filter</button>
                </div> 
            </form>
            </div>
            
        </React.Fragment>
    )
}

export default FilterForm
