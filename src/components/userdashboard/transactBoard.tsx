import React, { useLayoutEffect, useState, JSX } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight, faCaretDown, faUsersCog } from "@fortawesome/free-solid-svg-icons"
import FilterForm from "../filtermodal"
import { nameData } from "../../data"


type userfetch = {
    id: string,
    email: string,
    roles: string[],
    apiKey: string,
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

type newDimen = {
    mainData: userfetch[],
    smallView: userfetch[] | undefined;
    pageView: number,
    currPage: number,
    numStart: number,
    numEnd: number,
}

const TransactBoard = (): JSX.Element => {
    const maxPage = 5
    const madeDate = new Date().toDateString()
    const [filterTog, setFilterTog] = useState(false)
    const [handleData, setHandleData] = useState<newDimen>({
        mainData: nameData,
        smallView: undefined,
        pageView: 10,
        currPage: 1,
        numStart: 1,
        numEnd: 8,
    })
    //const [users, setUsers] = useState(nameData)

    function moveLeft() {
        if (handleData.currPage >= 1 && !(handleData.currPage < 0)) {
            setHandleData((prev) => {
                return { ...prev, numStart: handleData.numStart - 5, numEnd: handleData.numEnd - 5, currPage: handleData.currPage - 1 }
            })
            console.log(handleData.smallView)
        }
    }

    function moveRight() {
        if (handleData.currPage >= 1 && handleData.currPage <= maxPage) {
            setHandleData((prev) => {
                return { ...prev, numStart: handleData.numStart + 5, numEnd: handleData.numEnd + 5, currPage: handleData.currPage + 1 }
            })
            console.log(handleData.smallView)
        }
    }

    function pageRender(firstValue: number, secondValue: number, impValue: number) {
        const smallpage = Math.floor(nameData.length / impValue)
        console.log(smallpage)
        const newArr = nameData.slice(firstValue, secondValue)
        console.log(newArr)
        setHandleData({ ...handleData, smallView: newArr })
    }

    function handleClick () {
        setFilterTog((prev) => !prev)
    }

    // function handleInput(e: ChangeEventHandler<HTMLSelectElement>) {
    //     setHandleData((prev) => {
    //         return { ...prev, smallView: e.target.value }
    //     })
    // }

    useLayoutEffect(() => {

        pageRender(handleData.numStart, handleData.numEnd, maxPage)

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
    }, [handleData.numEnd, handleData.numStart])

    return (
        <React.Fragment>
            <div className="w-full mt-10 relative">
                <div className="container w-10/12 mx-auto my-10">
                    <h3 className="my-10 text-blue-700 font-mono font-extrabold text-2xl">Users</h3>
                    <div className="container flex flex-row justify-between">
                        <div className="w-48 px-5 center bg-white border-2 border-lime-440">
                            <FontAwesomeIcon className="my-2 border-2 rounded-full p-3 bg-purple-300 text-purple-700" icon={faUsersCog} />
                            <h4 className="font-sans py-2 text-blue-700 font-bold text-xs uppercase">Users</h4>
                            <p className="font-sans py-2 text-blue-700 font-bold text-xl">2,443</p>
                        </div>
                        <div className="w-48 px-5 center bg-white border-2 border-lime-440">
                            <FontAwesomeIcon className="my-2 border-2 rounded-full p-3 bg-blue-300 text-blue-700" icon={faUsersCog} />
                            <h4 className="font-sans py-2 text-blue-700 font-bold text-xs uppercase">Active Users</h4>
                            <p className="font-sans py-2 text-blue-700 font-bold text-xl">2,443</p>
                        </div>
                        <div className="w-48 px-5 center bg-white border-2 border-lime-440">
                            <FontAwesomeIcon className="my-2 border-2 rounded-full p-3 bg-red-300 text-red-700" icon={faUsersCog} />
                            <h4 className="font-sans py-2 text-blue-700 font-bold text-xs uppercase">Users with Loans</h4>
                            <p className="font-sans py-2 text-blue-700 font-bold text-xl">2,443</p>
                        </div>
                        <div className="w-48 px-5 center bg-white border-2 border-lime-440">
                            <FontAwesomeIcon className="my-2 border-2 rounded-full p-3 bg-orange-300 text-orange-700" icon={faUsersCog} />
                            <h4 className="font-sans py-2 text-blue-700 font-bold text-xs uppercase">Users with Savings</h4>
                            <p className="font-sans py-2 text-blue-700 font-bold text-xl">2,443</p>
                        </div>
                    </div>
                    <div className="w-full relative bg-white">
                        {filterTog && <FilterForm />}
                        <table className="border-2 w-full my-10 px-20">
                            <thead className="w-full">
                                <tr className="w-full">
                                    <th className = "text-slate-700 text-left py-3 mx-2">Organisation <FontAwesomeIcon onClick = {handleClick} icon={faCaretDown} /></th>
                                    <th className = "text-slate-700 text-left">Username <FontAwesomeIcon onClick = {handleClick} icon={faCaretDown} /></th>
                                    <th className = "text-slate-700 text-left">Email <FontAwesomeIcon onClick = {handleClick} icon={faCaretDown} /></th>
                                    <th className = "text-slate-700 text-left">Phone number <FontAwesomeIcon onClick = {handleClick} icon={faCaretDown} /></th>
                                    <th className = "text-slate-700 text-left">Date joined <FontAwesomeIcon onClick = {handleClick} icon={faCaretDown} /></th>
                                    <th className = "text-slate-700 text-left">Status <FontAwesomeIcon onClick = {handleClick} icon={faCaretDown} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    handleData.smallView?.map((unituser) => {
                                        return (
                                            <tr key={unituser.id} className=" container w-9/12 text-5 text-slate-400 border-2 my-5">
                                                <td className="text-left py-3 mx-2">{unituser.profile.company}</td>
                                                <td className="text-left">{unituser.username}</td>
                                                <td className="text-left">{unituser.email}</td>
                                                <td className="text-left">+234 9090728598</td>
                                                <td className="text-left">{madeDate}</td>
                                                <td className="text-left">Active</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
    
                    </div>
                    <div className="container flex flex-row align-center justify-between py-5">
                            <div className="w-64 text-left text-10 text-gold-400">
                                {/* {handleData.currPage} */}
                                  
                                Showing 
                                <select className = "w-20 bg-slate-300 font-sans text-white mx-5" onChange={(e) => setHandleData((prev) => {
                                    return {...prev, pageView: Number(e.target.value)}
                                })}>
                                    <option>10</option>
                                    <option>20</option>
                                    <option>30</option>
                                    <option>40</option>
                                </select>
                                of {handleData.mainData.length}
                            </div>
                            <div className="w-20 flex flex-row text-left align-evenly justify-evenly">
                                <FontAwesomeIcon onClick={moveLeft} icon={faArrowLeft} />
                                <FontAwesomeIcon onClick={moveRight} icon={faArrowRight} />
                            </div>
                        </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TransactBoard