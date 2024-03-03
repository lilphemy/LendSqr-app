import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LogoImage from "../../Images/Group.svg"
import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons"
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons"


const HeadnavComp = () => {
    const userName = localStorage.getItem("logged-username")

    return (
        <React.Fragment>
            <div className=" w-full text-center bg-white mx-auto py-3">
                <div className="flex flex-row justify-between w-full px-5">
                    <div className="w-4/12 px-3 py-1.5"><img src={LogoImage} /></div>
                    <div className="w-4/12 py-1.5 mx-24">
                        <form className="w-full">
                            <input type="text" placeholder="search anything" className="w-72 py-0.5 px-1 border-2 border-blue-500 outline-0" />
                            <button className = "w-14 bg-cyan-600 p-1" type="submit"><FontAwesomeIcon className="text-white" icon={faSearch} /></button>
                        </form>
                    </div>
                    <div className="container w-4/12 flex flex-column justify-evenly content-center py-1.5">
                        <h4>Doc</h4>
                        <FontAwesomeIcon className="my-1.5" icon = {faBell}/>
                        <FontAwesomeIcon className="my-1.5" icon ={faUser} />
                        <h4>{userName}</h4>
                        <FontAwesomeIcon icon ={faCaretDown}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeadnavComp