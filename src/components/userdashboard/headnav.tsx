import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LogoImage from "../../Images/Group.svg"
import { faBell, faCaretDown, faSearch, faUser } from "@fortawesome/free-solid-svg-icons"


const HeadnavComp = () => {

    return (
        <React.Fragment>
            <nav className="container w-screen relative text-center border-2 border-blue-500">
                <div className=" container flex flex-row justify-between w-full">
                    <div className="w-4/12 p-1.5 border-2 border-cyan-500"><img src={LogoImage} /></div>
                    <div className="w-4/12 border-2 border-red-600 py-1.5 mx-6">
                        <form className="w-full">
                            <input type="text" className="w-64 border-2 border-blue-500 outline-0" />
                            <button className = "w-14 border-2 border-red-600 bg-cyan-600" type="submit"><FontAwesomeIcon className="text-white" icon={faSearch} /></button>
                        </form>
                    </div>
                    <div className="container w-4/12 flex flex-row justify-evenly border-2 border-red-400 content-center p-1.5">
                        <h4>Doc</h4>
                        <FontAwesomeIcon icon = {faBell}/>
                        <FontAwesomeIcon icon ={faUser} />
                        <h4>Ayodeji</h4>
                        <FontAwesomeIcon icon ={faCaretDown} />
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default HeadnavComp