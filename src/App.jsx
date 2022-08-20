import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import AddHouse from './components/AddHouse';
import MyReservations from './components/MyReservations';
import AddRerservation from './components/AddReservation';
import { middleWareFunction } from './redux/reducer';
import DetailReservation from './components/DetailReservation';
import DeleteHouse from './components/DeleteHouse';
import AuthPage from './components/AuthPage';
function App() {
  const dispatch = useDispatch();
  const loggedIn = false;
  useEffect(() => {
    dispatch(middleWareFunction());
  }, []);
  return (
    <>
      {loggedIn ? <Authorised /> : <Unauthorised />}
    </>
    )
}
const Unauthorised = () => (
  <>
    <Routes>
      <Route path="/" element={<AuthPage />} />
    </Routes>
  </>
);
const Authorised = () => (
  <div className="App">
     <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add_house" element={<AddHouse />} />
        <Route path='delete_house' element={<DeleteHouse />} />
        <Route path="my_reservations" element={<MyReservations />} />
        <Route path="add_reservation" element={<AddRerservation />} />
        <Route path="my_reservations/:id" element={<DetailReservation />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
  </div>
);
export default App;