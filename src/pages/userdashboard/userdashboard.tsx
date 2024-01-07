
import React from "react";
import HeadnavComp from "../../components/userdashboard/headnav";
import SideMenuBar from "../../components/userdashboard/sidemenu";


const UserDashbaordComp = () => {


    return(
        <React.Fragment>
            <div className = "w-screen bg-slate-400">
                <HeadnavComp />
                <SideMenuBar />
            </div>

        </React.Fragment>
    )
}

export default UserDashbaordComp; 