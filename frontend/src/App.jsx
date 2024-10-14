import { Route, Routes } from "react-router-dom"

import Landingpage from "./pages/Landingpage/Index"
import Homepage from "./pages/Homepage/Index"
import Profile from "./pages/Profile/Index"
import Signin from "./pages/Signin/Index"
import Signup from "./pages/Signup/Index"

// import UserList from "./pages/UserList"
// import AddUser from "./pages/AddUser"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/home/profile/:id" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path='/' element={<UserList />} />
        <Route path='/add' element={<AddUser />} /> */}
      </Routes>
    </>
  )
}

export default App
