import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { GoLocation } from "react-icons/go"
import { BiLeftArrow } from "react-icons/bi"
import { useNavigate } from "react-router-dom"

const MyReservations = () => {
  const [userReservations, setUserReservations] = useState();
  const data = useSelector((state) => state)
  const navigate = useNavigate()
  useEffect(() => {
    const fuku = async () => {
      const data = await fetch(
        "https://zuku-apartments-api.herokuapp.com/api/v1/reservations",
        {
          method: "GET",
          headers: {
            Authorization: JSON.parse(localStorage.getItem("token")),
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const response = await data.json();
      const actual = response.filter(
        (i) => i.user_id === JSON.parse(localStorage.getItem("current_user")).id
      );
      setUserReservations(actual);
    };
    fuku();
  }, []);

  return (
    <div className="my-reservations-page">
      <button type="button" onClick={() => navigate('/')} className="left-button left-right-buttons add-apartment-page-back-btn white-back-btn my-reservations-back-btn">
        <BiLeftArrow className="direction-icons green-direction-icon" />
      </button>
      <h1>My reservations</h1>
      {userReservations ? (
        userReservations.map((userReservation) => (
          <div key={userReservation.id}>
            <p>Name: {data.filter((i)=> i.id === userReservation.apartment_id)[0].name}</p>
            <p><GoLocation className="location" />{data.filter((i)=> i.id === userReservation.apartment_id)[0].city}</p>
            <p>Start date: {userReservation.startDate}</p>
            <p>End date: {userReservation.endDate}</p>
            <p>Amount: ${userReservation.amount}</p>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default MyReservations;
