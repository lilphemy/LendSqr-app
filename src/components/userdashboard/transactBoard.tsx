import React, { useLayoutEffect, useState, JSX } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faUsersCog } from "@fortawesome/free-solid-svg-icons"
import FilterForm from "../filtermodal"
import { nameData } from "../../data"
import axios from "axios"


type userfetch = {
    id: string,
    email: string,
    roles: string[],
    apiKey:string,
    profile: {
        dob: string,
        name: string,
        about: string,
        address: string,
        company: string,
        location: {
            lat: number,
            long: number,
        }
    },
    username: string,
    createdAt: string,
    updatedAt: string,
}

const TransactBoard = (): JSX.Element => {
    const madeDate = new Date().toDateString();
    const [filterTog, setFilterTog] = useState(false)
    const [users, setUsers] = useState(nameData)

    useLayoutEffect(() => {
        //const newForm = JSON.parse(nameData)
        //setUsers(nameData)
        // var config = {
        //     method: "get",
        //     url: "https://api.json-generator.com/templates/UbJx0rq6DWsS/data",
        //     headers: {
        //         "Authorization": "ha7yk8e5i6j12rpyp13g6qnq9w59e2sa9x807h2o",
        //     }
        // }
        // axios(config)
        // .then((res)=>{
        //     if(res.status === 200 ){
        //         console.log(res)
        //     }
        // } )
        // .catch((err) => console.log(err))

        // async function getData() {
        //     const dataPull = await fetch("https://api.json-generator.com/templates/UbJx0rq6DWsS/data", {
        //         method: "get",
        //         headers: {
        //             "Authorization: Bearer ha7yk8e5i6j12rpyp13g6qnq9w59e2sa9x807h2o"
        //         }
        //     })
        //     const dataValues = await dataPull.json()
        //     console.log(dataValues)
        // }

        // getData()
    })

    return (
        <React.Fragment>
            <div className="w-full mt-10 relative">
                <div className="container w-10/12 mx-auto my-10 bg-white">
                    <h3 className="my-10">Users</h3>
                    <div className="container flex flex-row justify-between">
                        <div className="w-48 px-5 center border-2 border-lime-440">
                            <FontAwesomeIcon icon={faUsersCog} />
                            <h4>Users</h4>
                            <p>2,443</p>
                        </div>
                        <div className="w-48 px-5 center border-2 border-lime-440">
                            <FontAwesomeIcon icon={faUsersCog} />
                            <h4>Active Users</h4>
                            <p>2,443</p>
                        </div>
                        <div className="w-48 px-5 center border-2 border-lime-440">
                            <FontAwesomeIcon icon={faUsersCog} />
                            <h4>Users with Loans</h4>
                            <p>2,443</p>
                        </div>
                        <div className="w-48 px-5 center border-2 border-lime-440">
                            <FontAwesomeIcon icon={faUsersCog} />
                            <h4>Users with Savings</h4>
                            <p>2,443</p>
                        </div>
                    </div>
                    <div className="w-full relative">
                        {filterTog && <FilterForm />}
                        <table className="border-2 border-brown-400 w-full my-10 ">
                            <thead className="w-full">
                                <tr className="w-full">
                                    <th>Organisation <FontAwesomeIcon icon={faCaretDown} /></th>
                                    <th>Username <FontAwesomeIcon icon={faCaretDown} /></th>
                                    <th>Email <FontAwesomeIcon icon={faCaretDown} /></th>
                                    <th>Phone number <FontAwesomeIcon icon={faCaretDown} /></th>
                                    <th>Date joined <FontAwesomeIcon icon={faCaretDown} /></th>
                                    <th>Status <FontAwesomeIcon icon={faCaretDown} /></th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    users.map((unituser) => {
                                        
                                        return (
                                            <tr key={unituser.id} className="text-5 text-cyan-500">
                                                <td className = "text-left">{unituser.profile.company}</td>
                                                <td className = "text-left">{unituser.username}</td>
                                                <td className = "text-left">{unituser.email}</td>
                                                <td className = "text-left">+234 9090728598</td>
                                                <td className = "text-left">{madeDate}</td>
                                                <td className = "text-left">Active</td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TransactBoard