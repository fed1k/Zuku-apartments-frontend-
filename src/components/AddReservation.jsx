import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { auth } from "../redux/reducer";

const AddReservation = () => {
  const [age, setAge] = useState("");
  const [amount, setAmount] = useState(0);
  const [sDate, setSDate] = useState();
  const [eDate, setEDate] = useState();
  const [picked, setPicked] = useState();

  const apartments = useSelector((state) => state);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setAge(event.target.value);
    const pickedApartment = apartments.filter(
      (apartment) => apartment.id === event.target.value
    );
    setPicked(pickedApartment);
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
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1300,
      });
      const startDate = new Date(sDate);
      const endDate = new Date(eDate);
      const difference = endDate.getTime() - startDate.getTime();
      const TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
      setAmount(TotalDays * picked[0].price);
      // const difference = sDate.getTime() - eDate.getTime();
      // console.log(difference);
      // console.log(age);
      // console.log((((parseInt(eDate) - parseInt(sDate)).to_f / 365) * 12).round);
      // console.log(parseInt(eDate - sDate));
      // console.log(typeof eDate);
      //   const data = {
      //     startDate: sDate,
      //     endDate: eDate,
      //     apartment_id: age,
      //     amount,
      //     user_id: JSON.parse(localStorage.getItem('current_user')).id,
      //   };
      //   fetch('https://zuku-apartments-api.herokuapp.com/api/v1/reservations', {
      //     method: 'POST',
      //     body: JSON.stringify(data),
      //     headers: {
      //       Authorization: auth,
      //       Accept: 'application/json',
      //       'Content-Type': 'application/json',
      //     },
      //   });
      //   setTimeout(() => {
      //     navigate('/my_reservations');
      //   }, 1500);
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "End Date should be greater than start date",
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
        <TextField
          id="demo-helper-text-misaligned-no-helper"
          label="Amount $"
          type="number"
          disabled
          value={`${amount}`}
        />
        <Button
          type="submit"
          className="add-reservation-btn"
          style={{ backgroundColor: "#97C00EFF" }}
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
