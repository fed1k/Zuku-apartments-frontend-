import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { BiLeftArrow } from "react-icons/bi"

const AddReservation = () => {
  const [age, setAge] = useState('');
  const [amount, setAmount] = useState(0);
  const [sDate, setSDate] = useState();
  const [eDate, setEDate] = useState();
  const [picked, setPicked] = useState();
  const navigate = useNavigate()

  const apartments = useSelector((state) => state);

  const handleChange = (event) => {
    setAge(event.target.value);
    const pickedApartment = apartments.filter(
      (apartment) => apartment.id === event.target.value,
    );
    setPicked(pickedApartment);
  };

  const handleStartDate = (e) => {
    setSDate(e.target.value);
  };
  const handleEndDate = (e) => {
    setEDate(e.target.value);
    const startDate = new Date(sDate);
    const endDate = new Date(e.target.value);
    const difference = endDate.getTime() - startDate.getTime();
    const TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    setAmount(TotalDays * Math.round(picked[0].price / 30));
  };

  const postData = () => {
    const reservation = {
      startDate: sDate,
      endDate: eDate,
      amount,
      user_id: JSON.parse(localStorage.getItem('current_user')).id,
      apartment_id: picked[0].id
    };
    fetch('https://zuku-apartments-api.herokuapp.com/api/v1/reservations', {
      method: 'POST',
      body: JSON.stringify({reservation}),
      headers: {
        Authorization: JSON.parse(localStorage.getItem('token')),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  };

  const submit = (e) => {
    e.preventDefault();
    if (eDate > sDate) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1300,
      });
      postData();
      setTimeout(()=>{
        navigate('/my_reservations')
      }, 1600)
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'End Date should be greater than start date',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <form action="" className="reservation-form" onSubmit={submit}>
      <button type="button" onClick={() => navigate('/')} className="left-button left-right-buttons add-apartment-page-back-btn white-back-btn">
        <BiLeftArrow className="direction-icons green-direction-icon" />
      </button>
      <FormControl
        sx={{ m: 1, minWidth: 120 }}
        size="small"
        className="ui-form-for-reservation"
      >
        <InputLabel id="demo-select-small" style={{ color: 'white' }}>Name of Apartment</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={age}
          label="Name of Apartment"
          onChange={handleChange}
          required
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {apartments ? (
            apartments.map((apartment) => (
              <MenuItem
                key={apartment.id}
                value={apartment.id}
                className={apartment.price}
              >
                {apartment.name}
              </MenuItem>
            ))
          ) : (
            <span> </span>
          )}
        </Select>
        <div className="datetime-div">
          <input type="date" onChange={handleStartDate} required />
          <span>to</span>
          <input type="date" onChange={handleEndDate} required />
        </div>
        <fieldset>
          <legend>Amount $</legend>
          <input type="number" id="mothman" name="monster" disabled value={amount} />
        </fieldset>
        <Button
          type="submit"
          className="add-reservation-btn"
          style={{ backgroundColor: '#97C00EFF' }}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Book
        </Button>
      </FormControl>
    </form>
  );
};

export default AddReservation;
