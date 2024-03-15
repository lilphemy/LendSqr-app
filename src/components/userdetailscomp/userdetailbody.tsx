import React from "react";
import { nameData } from "../../data"


const UserDetailBody = function () {

    return (
        <React.Fragment>
            <main className="w-full bg-white mt-10 px-5 py-5">
                <div className="w-full border-b-2 border-slate-400">
                    <h3 className="text-md text-blue-700 font-bold pt-5 capitalize">Personal Information</h3>
                    <div className="flex flex-row flex-wrap w-full justify-start text-blue-300">
                        <div className=" w-52 h-fit my-5">
                            <h5>Full Name</h5>
                            <p className = "font-bold font-serif">{nameData[0].profile.name}</p>
                        </div>
                        <div className="w-52 my-5 h-fit">
                            <h5>Phone Number</h5>
                            <p className="font-bold font-serif">0900728598</p>
                        </div>
                        <div className="w-52 h-fit my-5">
                            <h5>email address</h5>
                            <p className="font-bold font-serif">lilphemy@gmail.com</p>
                        </div>
                        <div className="w-52 h-fit my-5">
                            <h5>BVN</h5>
                            <p className="font-bold font-serif">0900728598</p>
                        </div>
                        <div className="w-52 h-fit my-5">
                            <h5>Gender</h5>
                            <p className="font-bold font-serif">male</p>
                        </div>
                        <div className="w-52 h-fit my-5">
                            <h5>Marital status</h5>
                            <p className="font-bold font-serif">0900728598</p>
                        </div>
                        <div className="w-52 h-fit my-5">
                            <h5>Children</h5>
                            <p className="font-bold font-serif">0900728598</p>
                        </div>
                        <div className="w-52 h-fit my-5">
                            <h5>type of residence</h5>
                            <p className="font-bold font-serif">0900728598</p>
                        </div>
                    </div>
                </div>
                <div className="w-full border-b-2 border-slate-400">
                    <h3 className="text-md text-blue-700 font-bold pt-5 capitalize">education and employment</h3>
                    <div className="flex flex-row flex-wrap w-full justify-start text-blue-300">
                        <div className=" w-52 h-fit my-5">
                            <h5>Level of education</h5>
                            <p className = "font-bold font-serif">{nameData[0].profile.name}</p>
                        </div>
                        <div className="w-52 my-5 h-fit">
                            <h5>Status of employment</h5>
                            <p className="font-bold font-serif">0900728598</p>
                        </div>
                        <div className="w-52 h-fit my-5">
                            <h5>Sector of Employment</h5>
                            <p className="font-bold font-serif">lilphemy@gmail.com</p>
                        </div>
                        <div className="w-52 h-fit my-5">
                            <h5>Duration of Employment</h5>
                            <p className="font-bold font-serif">0900728598</p>
                        </div>
                        <div className="w-52 h-fit my-5">
                            <h5>Office email</h5>
                            <p className="font-bold font-serif">male</p>
                        </div>
                        <div className="w-52 h-fit my-5">
                            <h5>Monthly Income</h5>
                            <p className="font-bold font-serif">0900728598</p>
                        </div>
                        <div className="w-52 h-fit my-5">
                            <h5>Loan repayment</h5>
                            <p className="font-bold font-serif">0900728598</p>
                        </div>
                        <div className="w-52 h-fit my-5">
                            <h5>type of residence</h5>
                            <p className="font-bold font-serif">0900728598</p>
                        </div>
                    </div>
                </div>
                <div className="w-full border-b-2 border-slate-400">
                    <h3 className="text-md text-blue-700 font-bold pt-5 capitalize">socials</h3>
                    <div className="flex flex-row flex-wrap w-full justify-start text-blue-300">
                        <div className=" w-52 h-fit my-5">
                            <h5>Twitter</h5>
                            <p className = "font-bold font-serif">{nameData[0].profile.name}</p>
                        </div>
                        <div className="w-52 my-5 h-fit">
                            <h5>FaceBook</h5>
                            <p className="font-bold font-serif">0900728598</p>
                        </div>
                        <div className="w-52 h-fit my-5">
                            <h5>Instagram</h5>
                            <p className="font-bold font-serif">lilphemy@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="w-full border-b-2 border-slate-400 h-32">
                    <h3 className="text-md text-blue-700 font-bold pt-5 capitalize">guarantors</h3>
                    <div className="flex flex-row flex-wrap w-full justify-start text-blue-300">
                        <div className=" w-52 h-fit my-5">
                            <h5>Full Name</h5>
                            <p className = "font-bold font-serif">{nameData[0].profile.name}</p>
                        </div>
                        <div className="w-52 my-5 h-fit">
                            <h5>Phone Number</h5>
                            <p className="font-bold font-serif">08070728598</p>
                        </div>
                        <div className="w-52 h-fit my-5">
                            <h5>Email Address</h5>
                            <p className="font-bold font-serif">sister@gmail.com</p>
                        </div>
                        <div className="w-52 h-fit my-5">
                            <h5>Relationship</h5>
                            <p className="font-bold font-serif">sister</p>
                        </div>
                    </div>
                </div>
                <div className="w-full ">
                    <h3></h3>
                </div>
            </main>
        </React.Fragment>
    )

}

export default UserDetailBody