import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Sidebar from "./components/Sidebar"
import AddHouse from "./components/AddHouse"
import MyReservations from "./components/MyReservations"
import AddRerservation from "./components/AddReservation"

function App() {
  return (
    <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="add_house" element={<AddHouse />}/>
          <Route path="my_reservations" element={<MyReservations />}/>
          <Route path="add_reservation" element={<AddRerservation />}/>
        </Routes>
    </div>
  )
}

export default App
