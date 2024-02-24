import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import HeadnavComp from "../userdashboard/headnav"
import SideMenuBar from "../userdashboard/sidemenu"
import UserDetailBody from "./userdetailbody"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft"
import { faUserCircle } from "@fortawesome/free-regular-svg-icons/faUserCircle"
import { faStar } from "@fortawesome/free-regular-svg-icons/faStar"


function UserDetailsComp() {
    
    return (
        <React.Fragment>
            <HeadnavComp />
            <div className="flex flex-row justify-between">
                <SideMenuBar />
                <section className="container w-9/12 my-10 mx-auto">
                    <Link to="/userdashboard">
                        <div className="container text-normal text-slate-700 my-6 ">
                            <FontAwesomeIcon className="mr-5" icon={faArrowLeft} />
                            Back to Users
                        </div>
                    </Link>
                    <div className="container flex flex-row w-full justify-between py-3 text-2xl">
                        <p className="font-mono text-cyan-600 font-semibold py-5">User Details</p>
                        <div className="container w-2/5 py-5 text-center flex justify-evenly">
                            <button type="button" className="tracking-wider text-lg text-red-400 outline-0 border-2 border-red-400 text-red px-8 py-1 rounded-md">Blacklist user</button>
                            <button type="button" className=" tracking-wider outline-0 text-lg text-green-400 border-2 border-green-400 text-red px-8 py-1 rounded-md">Activate User</button>
                        </div>
                    </div>
                    <div className="container w-full bg-white">
                        <div className="container flex py-3">
                            <div className="container flex py-5 px-2 border-r-2 w-6/12 text-center">
                                <div className=""><FontAwesomeIcon className="size-20 px-3 outline-0 text-blue-900" icon={faUserCircle} /></div>
                                <div className="w-9/12 text-left px-5 py-3 text-blue-900">
                                    <p className="font-bold text-20 capitalize">lilphemy bennymac</p>
                                    <p>LS763G2420</p>
                                </div>
                            </div>
                            <div className="container text-center w-3/12 border-r-2 py-5">
                                <div className="text-blue-900">User's Tier</div>
                                <div className=" py-2 justify-center text-yellow-500 align-center flex flex-row">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                            <div className="container pl-8 text-blue-900 py-5">
                                <h2 className="text-xl font-bold">#200,000</h2>
                                <p>7908711287/GT Bank</p>
                            </div>
                        </div>
                        <div className="container w-full flex justify-evenly">
                            <div className="capitalize cursor-pointer font-bold hover:text-cyan-300 hover:border-b-2 border-cyan-300">general details</div>
                            <div className="capitalize cursor-pointer font-bold hover:text-cyan-300 hover:border-b-2 border-cyan-300">Documents</div>
                            <div className="capitalize cursor-pointer font-bold hover:text-cyan-300 hover:border-b-2 border-cyan-300">bank details</div>
                            <div className="capitalize cursor-pointer font-bold hover:text-cyan-300 hover:border-b-2 border-cyan-300">loans</div>
                            <div className="capitalize cursor-pointer font-bold hover:text-cyan-300 hover:border-b-2 border-cyan-300">savings</div>
                            <div className="font-bold cursor-pointer hover:text-cyan-300 hover:border-b-2 border-cyan-300">App and Systems</div>
                        </div>
                    </div>
                    <UserDetailBody/>
                </section>

            </div>

        </React.Fragment>
    )
}

export default UserDetailsComp