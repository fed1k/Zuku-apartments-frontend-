import React,{ useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Sidebar from "./components/Sidebar"
import AddHouse from "./components/AddHouse"
import MyReservations from "./components/MyReservations"
import AddRerservation from "./components/AddReservation"
import { useDispatch } from "react-redux"
import { middleWareFunction } from "./redux/reducer"
import DetailReservation from "./components/DetailReservation"

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(middleWareFunction())
  },[])

  return (
    <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="add_house" element={<AddHouse />}/>
          <Route path="my_reservations" element={<MyReservations />}/>
          <Route path="add_reservation" element={<AddRerservation />}/>
          <Route path="my_reservations/:id" element={<DetailReservation />} />
        </Routes>
    </div>
  )
}

export default App
