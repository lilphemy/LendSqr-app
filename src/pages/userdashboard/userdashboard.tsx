
import React from "react";
import HeadnavComp from "../../components/userdashboard/headnav";
import SideMenuBar from "../../components/userdashboard/sidemenu";
import TransactBoard from "../../components/userdashboard/transactBoard";


const UserDashbaordComp = () => {

    return (
        <React.Fragment>
            <HeadnavComp />
            <div className="flex flex-row justify-between">
                <SideMenuBar />
                <TransactBoard />
            </div>
        </React.Fragment>
    )
}

export default UserDashbaordComp; 