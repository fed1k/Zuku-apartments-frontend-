import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const FormForReserve = ({ state }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useSelector((state)=> state.filter((i)=> i.id === parseInt(id)))
  const [amount, setAmount] = useState(0);
  const [sDate, setSDate] = useState();
  const [eDate, setEDate] = useState();

  const handleStartDate = (e) => {
    setSDate(e.target.value);
  };

  const handleEndDate = (e) => {
    setEDate(e.target.value);
    const startDate = new Date(sDate);
    const endDate = new Date(e.target.value);
    const difference = endDate.getTime() - startDate.getTime();
    const TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    setAmount(TotalDays * Math.round(data[0].price / 30));
  };

  const postData = (e) => {
    e.preventDefault()
    const reservation = {
      startDate: sDate,
      endDate: eDate,
      amount,
      user_id: JSON.parse(localStorage.getItem("current_user")).id,
      apartment_id: parseInt(id),
    };
    fetch("https://zuku-apartments-api.herokuapp.com/api/v1/reservations", {
      method: "POST",
      body: JSON.stringify({ reservation }),
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    setTimeout(()=>{
      navigate('/my_reservations')
    }, 1000)
  };

  return (
    <div className="popup-main-container">
      <form className="sub-popup" onSubmit={postData}>
        <FaWindowClose
          className="close-icon-popup"
          onClick={() => state(false)}
        />
        <div action="">
          <input type="date" onChange={handleStartDate}  required/>
          <span>TO</span>
          <input type="date" onChange={handleEndDate} required/>
        </div>
        <fieldset className="detail-reserve-amount">
          <legend>Amount $</legend>
          <input
            type="number"
            id="mothman"
            name="monster"
            disabled
            value={amount}
          />
        </fieldset>
        <Button
          type="submit"
          className="add-reservation-btn"
          style={{ backgroundColor: "#97C00EFF" }}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Book
        </Button>
      </form>
    </div>
  );
};

FormForReserve.propTypes = {
  state: PropTypes.func.isRequired,
};

export default FormForReserve;
