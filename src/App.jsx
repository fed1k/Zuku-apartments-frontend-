import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Sidebar from "./components/Sidebar"
import AddHouse from "./components/AddHouse"
import MyReservations from "./components/MyReservations"
import AddRerservation from "./components/AddReservation"
import AuthPage from "./components/AuthPage"

function App() {
  const loggedIn = false;
  return (
    <>
      {loggedIn ? <Authorised /> : <Unauthorised />}
    </>
    
  )
}

export default App

const Authorised = () => {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add_house" element={<AddHouse />} />
        <Route path="my_reservations" element={<MyReservations />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="add_reservation" element={<AddRerservation />} />
      </Routes>
    </div>
  )
};

const Unauthorised = () => {
  return(<>
      <Routes>
        <Route path="/" element={<AuthPage />} />
      </Routes>
  </>)
}
