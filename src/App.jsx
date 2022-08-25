import React, { useEffect, useState } from 'react';
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
  const [inner, setIn] = useState(false);
  useEffect(() => {
    dispatch(middleWareFunction());

    if (JSON.parse(localStorage.getItem('current_user'))) {
      setIn(true);
    }
  }, []);

  if (!inner) {
    return <AuthPage setIn={setIn} />;
  }

  return (
    <div className="App">
      <Sidebar setIn={setIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add_house" element={<AddHouse />} />
        <Route path="delete_house" element={<DeleteHouse />} />
        <Route path="my_reservations" element={<MyReservations />} />
        <Route path="add_reservation" element={<AddRerservation />} />
        <Route path="my_reservations/:id" element={<DetailReservation />} />
      </Routes>
    </div>
  );
}

export default App;
