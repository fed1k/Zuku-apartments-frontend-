import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

const AddReservation = () => {
  const [age, setAge] = useState('');
  const apartments = useSelector((state) => state);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const logger = () => {
    console.log('uhhhhhu');
  };

  return (
    <form action="" className="reservation-form">
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className='ui-form-for-reservation'>
        <InputLabel id="demo-select-small">Name</InputLabel>
        <Select labelId="demo-select-small" id="demo-select-small" value={age} label="Name" onChange={handleChange} required>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {apartments ? apartments.map((apartment) => (
            <MenuItem key={apartment.id} value={apartment.id}>{apartment.name}</MenuItem>
          )) : <span> </span>}
        </Select>
        <TextField id="demo-helper-text-misaligned-no-helper" label="Amount" type="number" required />
        <div className="datetime-div">
          <input type="date" required />
          <span>to</span>
          <input type="date" required />
        </div>
        <Button type="submit" className="add-reservation-btn" style={{backgroundColor: '#97C00EFF'}} variant="contained" endIcon={<SendIcon />}>Send</Button>
      </FormControl>
    </form>
  );
};

export default AddReservation;
