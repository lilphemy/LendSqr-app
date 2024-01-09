import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LogoImage from "../../Images/Group.svg"
import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons"
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons"


const HeadnavComp = () => {

    return (
        <React.Fragment>
            <div className=" w-full text-center bg-white mx-auto py-3">
                <div className=" container flex flex-row justify-between w-full">
                    <div className="w-4/12 px-3 py-1.5"><img src={LogoImage} /></div>
                    <div className="w-4/12 py-1.5 mx-6">
                        <form className="w-full">
                            <input type="text" className="w-64 border-2 border-blue-500 outline-0" />
                            <button className = "w-14 bg-cyan-600" type="submit"><FontAwesomeIcon className="text-white" icon={faSearch} /></button>
                        </form>
                    </div>
                    <div className="container w-4/12 flex flex-row justify-evenly content-center py-1.5">
                        <h4>Doc</h4>
                        <FontAwesomeIcon className="my-1.5" icon = {faBell}/>
                        <FontAwesomeIcon className="my-1.5" icon ={faUser} />
                        <h4>User</h4>
                        <FontAwesomeIcon icon ={faCaretDown} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeadnavComp