import LoginPageComp from "./pages/loginpage/loginpage"
import UserDashbaordComp from "./pages/userdashboard/userdashboard"
import UserDetailsPage from "./pages/userdetails"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
  Home,
  userDashBoard,
  userDetails
} from "./Services/routerpaths"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path= {Home} element = {<LoginPageComp/>}/>
          <Route path = {userDashBoard} element = {<UserDashbaordComp/>}/>
          <Route path = {userDetails} element = {<UserDetailsPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
