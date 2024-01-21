import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import HeadnavComp from "../userdashboard/headnav"
import SideMenuBar from "../userdashboard/sidemenu"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft"


function UserDetailsComp() {

    return (
        <React.Fragment>
            <HeadnavComp />
            <div className="flex flex-row justify-between">
                <SideMenuBar />
                <section className="container w-9/12 my-10 mx-auto bg-blue-300">
                    <div className="container">
                        <FontAwesomeIcon icon={faArrowLeft} />
                        back to users
                    </div>
                    <div className="container flex flex-row w-full bg-orange-400 justify-between py-3">
                        <p>User Details</p>
                        <div className="container w-2/5 bg-white py-5">
                            <button type="button" className = "outline-0 border-2 border-red-400 mx-auto">Blacklist user</button>
                            <button type="button" className = "outline-0 border-2 border-red-400 mx-auto">Activate User</button>
                        </div>
                    </div>
                    <div className="container"></div>
                </section>
            </div>

        </React.Fragment>
    )
}

export default UserDetailsComp