import { faBuilding } from "@fortawesome/free-regular-svg-icons/faBuilding";
import { faHandsBound, faHandshake, faHome, faPiggyBank, faUserCheck, faUserXmark, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBank } from "@fortawesome/free-solid-svg-icons/faBank";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";



const SideMenuBar = () => {

    return (
        <React.Fragment>
            <div className=" w-60 bg-white border-2 border-white" >
                <div className="flex flex-row justify-between mx-3 my-6">
                    <FontAwesomeIcon icon={faBriefcase} />
                    <h3>Switch Organisation</h3>
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>
                <div className="flex flex-row mx-3 my-8">
                    <FontAwesomeIcon className="mr-8 text-xl" icon={faHome} />
                    <h3>Dashboard</h3>
                </div>
                <div className="container my-8 mx-3">
                    <div className="mx-auto my-8">Customers</div>
                    <div className="flex flex-row my-2">
                        <FontAwesomeIcon className="mr-8 text-xl text-slate-400" icon={faUsers} />
                        <div>
                            <p className="text-slate-400 text-1xl font-san">Users</p>
                        </div>
                    </div>
                    <div className="flex flex-row  my-2">
                        <FontAwesomeIcon className="mr-10 text-xl text-slate-400" icon={faBuilding} />
                        <div>
                            <p className="text-slate-400 text-1xl font-san">Guarantors</p>
                        </div>
                    </div>
                    <div className="flex flex-row  my-2">
                        <FontAwesomeIcon className="mr-9 text-xl text-slate-400" icon={faBank} />
                        <div>
                            <p className="text-slate-400 text-1xl font-san">Loans</p>
                        </div>
                    </div>
                    <div className="flex flex-row  my-2">
                        <FontAwesomeIcon className="mr-8 text-xl text-slate-400" icon={faHandshake} />
                        <div>
                            <p className="text-slate-400 text-1xl font-san">Decision Models</p>
                        </div>
                    </div>
                    <div className="flex flex-row  my-2">
                        <FontAwesomeIcon className="mr-8 text-xl text-slate-400" icon={faPiggyBank} />
                        <div>
                            <p className="text-slate-400 text-1xl font-san">Savings</p>
                        </div>
                    </div>
                    <div className="flex flex-row  my-2">
                        <FontAwesomeIcon className="mr-8 text-xl text-slate-400" icon={faHandsBound} />
                        <div>
                            <p className="text-slate-400 text-1xl font-san">Loan Requests</p>
                        </div>
                    </div>
                    <div className="flex flex-row  my-2">
                        <FontAwesomeIcon className="mr-8 text-xl text-slate-400" icon={faUserCheck} />
                        <div>
                            <p className="text-slate-400 text-1xl font-san">Whitelist</p>
                        </div>
                    </div>
                    <div className="flex flex-row  my-2">
                        <FontAwesomeIcon className="mr-8 text-xl text-slate-400" icon={faUserXmark} />
                        <div>
                            <p className="text-slate-400 text-1xl font-san">Karma</p>
                        </div>
                    </div>
                </div>
                <div className="container my-8 mx-3">
                    <div className="mx-auto my-8">Businesses</div>
                    <div className="flex flex-row my-2">
                        <FontAwesomeIcon className="mr-8 text-xl text-slate-400" icon={faUsers} />
                        <div>
                            <p className="text-slate-400 text-1xl font-san">Organisations</p>
                        </div>
                    </div>
                    <div className="flex flex-row  my-2">
                        <FontAwesomeIcon className="mr-10 text-xl text-slate-400" icon={faBuilding} />
                        <div>
                            <p className="text-slate-400 text-1xl font-san">Loan Products</p>
                        </div>
                    </div>
                    <div className="flex flex-row  my-2">
                        <FontAwesomeIcon className="mr-9 text-xl text-slate-400" icon={faBank} />
                        <div>
                            <p className="text-slate-400 text-1xl font-san">Savings Products</p>
                        </div>
                    </div>
                    <div className="flex flex-row  my-2">
                        <FontAwesomeIcon className="mr-8 text-xl text-slate-400" icon={faHandshake} />
                        <div>
                            <p className="text-slate-400 text-1xl font-san">Fees and Charges</p>
                        </div>
                    </div>
                    <div className="flex flex-row  my-2">
                        <FontAwesomeIcon className="mr-8 text-xl text-slate-400" icon={faPiggyBank} />
                        <div>
                            <p className="text-slate-400 text-1xl font-san">Transactions</p>
                        </div>
                    </div>
                    <div className="flex flex-row  my-2">
                        <FontAwesomeIcon className="mr-8 text-xl text-slate-400" icon={faHandsBound} />
                        <div>
                            <p className="text-slate-400 text-1xl font-san">Services</p>
                        </div>
                    </div>
                    <div className="flex flex-row  my-2">
                        <FontAwesomeIcon className="mr-8 text-xl text-slate-400" icon={faUserCheck} />
                        <div>
                            <p className="text-slate-400 text-1xl font-san">Services and Accounts</p>
                        </div>
                    </div>
                    <div className="flex flex-row  my-2">
                        <FontAwesomeIcon className="mr-8 text-xl text-slate-400" icon={faUserXmark} />
                        <div>
                            <p className="text-slate-400 text-1xl font-san">Settlement</p>
                        </div>
                    </div>
                    <div className="flex flex-row  my-2">
                        <FontAwesomeIcon className="mr-8 text-xl text-slate-400" icon={faUserXmark} />
                        <div>
                            <p className="text-slate-400 text-1xl font-san">Reports</p>
                        </div>
                    </div>
                </div>
                <div className="container my-8 mx-3">
                    <div className="mx-auto my-8">Settings</div>
                    <div className="flex flex-row my-2">
                        <FontAwesomeIcon className="mr-8 text-xl text-slate-400" icon={faUsers} />
                        <div>
                            <p className="text-slate-400 text-1xl font-san">Preferences</p>
                        </div>
                    </div>
                    <div className="flex flex-row  my-2">
                        <FontAwesomeIcon className="mr-10 text-xl text-slate-400" icon={faBuilding} />
                        <div>
                            <p className="text-slate-400 text-1xl font-san">Fess and Pricing</p>
                        </div>
                    </div>
                    <div className="flex flex-row  my-2">
                        <FontAwesomeIcon className="mr-9 text-xl text-slate-400" icon={faBank} />
                        <div>
                            <p className="text-slate-400 text-1xl font-san">Audit logs</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SideMenuBar