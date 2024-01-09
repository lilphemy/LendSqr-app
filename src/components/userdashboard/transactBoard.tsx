import React, { useLayoutEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faUsersCog } from "@fortawesome/free-solid-svg-icons"



const TransactBoard = () => {

    const [users, setUsers] = useState<string[]>()

    useLayoutEffect(() => {
        async function getData () {
            const dataPull = await fetch("https://api.json-generator.com/templates/UbJx0rq6DWsS/data")
            const dataValues = await dataPull.json()
            console.log(dataValues)
        }

        getData()
    })

    return (
        <React.Fragment>
            <div className="w-full mt-10 ">
                <div className="container w-9/12 border-2 border-red-400 mx-auto my-10 bg-white">
                    <h3 className="my-10">Users</h3>
                    <div className="container flex flex-row justify-between">
                        <div className="w-48 px-5 center border-2 border-lime-440">
                            <FontAwesomeIcon icon = {faUsersCog} />
                            <h4>Users</h4>
                            <p>2,443</p>
                        </div>
                        <div className="w-48 px-5 center border-2 border-lime-440">
                            <FontAwesomeIcon icon = {faUsersCog} />
                            <h4>Active Users</h4>
                            <p>2,443</p>
                        </div>
                        <div className="w-48 px-5 center border-2 border-lime-440">
                            <FontAwesomeIcon icon = {faUsersCog} />
                            <h4>Users with Loans</h4>
                            <p>2,443</p>
                        </div>
                        <div className="w-48 px-5 center border-2 border-lime-400">
                            <FontAwesomeIcon icon = {faUsersCog} />
                            <h4>Users with Savings</h4>
                            <p>2,443</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <table className = "border-2 border-brown-400 w-full my-10">
                            <thead className="w-full">
                                <td>Organisation <FontAwesomeIcon icon={faCaretDown}/></td>
                                <td>username <FontAwesomeIcon icon={faCaretDown}/></td>
                                <td>email <FontAwesomeIcon icon={faCaretDown}/></td>
                                <td>phone number <FontAwesomeIcon icon={faCaretDown}/></td>
                                <td>date joined <FontAwesomeIcon icon={faCaretDown}/></td>
                                <td>status <FontAwesomeIcon icon={faCaretDown}/></td>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TransactBoard