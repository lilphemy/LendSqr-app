import LoginPageComp from "./pages/loginpage/loginpage"
import UserDashbaordComp from "./pages/userdashboard/userdashboard"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
  Home,
  userDashBoard
} from "./Services/routerpaths"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path= {Home} element = {<LoginPageComp/>}/>
          <Route path = {userDashBoard} element = {<UserDashbaordComp/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
