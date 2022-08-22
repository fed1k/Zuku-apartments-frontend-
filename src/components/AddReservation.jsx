import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { auth } from '../redux/reducer';


const AddReservation = () => {
  const [age, setAge] = useState('');
  const [amount, setAmount] = useState();
  const [sDate, setSDate] = useState();
  const [eDate, setEDate] = useState();

  const apartments = useSelector((state) => state);
  const navigate = useNavigate();
  const ReserveAdd = (e) => {
    e.preventDefault();
    console.log(age);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleStartDate = (e) => {
    setSDate(e.target.value);
  };
  const handleEndDate = (e) => {
    setEDate(e.target.value);
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
      <FormControl
        sx={{ m: 1, minWidth: 120 }}
        size="small"
        className="ui-form-for-reservation"
      >
        <InputLabel id="demo-select-small">Name of Apartment</InputLabel>
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
              <MenuItem key={apartment.id} value={apartment.id}>
                {apartment.name}
              </MenuItem>
            ))
          ) : (
            <span> </span>
          )}
        </Select>
        <TextField
          id="demo-helper-text-misaligned-no-helper"
          label="Amount"
          type="number"
          onChange={handleAmount}
          required
        />
        <div className="datetime-div">
          <input type="date" onChange={handleStartDate} required />
          <span>to</span>
          <input type="date" onChange={handleEndDate} required />
        </div>
        <Button
          type="submit"
          className="add-reservation-btn"
          style={{ backgroundColor: '#97C00EFF' }}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </FormControl>
    </form>
  );
};

export default AddReservation;
