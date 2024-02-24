import React from "react";
import { nameData } from "../../data"


const UserDetailBody = function () {

    return (
        <React.Fragment>
            <main className="w-full bg-white mt-10 px-5 py-5">
                        <div className="w-full border-b-2 border-slate-400">
                            <h3 className="text-md text-blue-700 font-bold pt-5 capitalize">Personal Information</h3>
                            <div className="flex flex-column w-10/12 border-2">
                                <div className="flex flex-column border-2 border-red-300">
                                    <h5>Full Name</h5>
                                    <p>{nameData[0].profile.name}</p>
                                </div>

                                <div className="flex flex-column">
                                    <h5>Phone Number</h5>
                                    <p>{nameData[0].apiKey}</p>
                                </div>

                                <div className="flex flex-column w-10">dummy</div>

                                <div className="flex flex-column w-10">dummy</div>

                                <div className="flex flex-column w-10">dummy</div>

                                <div className="flex flex-column w-10">dummy</div>

                                <div className="flex flex-column w-10">dummy</div>

                                <div className="flex flex-column w-10">dummy</div>
                            </div>
                        </div>
                        <div className="w-full border-b-2 border-slate-400 h-32">
                            <h3 className="text-md text-blue-700 font-bold pt-5 capitalize">education and employment</h3>
                        </div>
                        <div className="w-full border-b-2 border-slate-400 h-32">
                            <h3 className="text-md text-blue-700 font-bold pt-5 capitalize">socials</h3>
                        </div>
                        <div className="w-full border-b-2 border-slate-400 h-32">
                            <h3 className="text-md text-blue-700 font-bold pt-5 capitalize">guarantors</h3>
                        </div>
                        <div className="w-full ">
                            <h3></h3>
                        </div>
                    </main>
        </React.Fragment>
    )

}

export default UserDetailBody