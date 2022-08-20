import TextField from '@mui/material/TextField';
import { useRef } from 'react';
import { auth } from '../redux/reducer';
import { useNavigate } from "react-router-dom";
import { BiLeftArrow } from "react-icons/bi"

const AddHouse = () => {
  const name = useRef();
  const price = useRef();
  const city = useRef();
  const capacity = useRef();
  const image = useRef();
  const description = useRef();
  const address = useRef();

  let navigate = useNavigate()

  const submitter = () => {
    const data = {
      name: name.current.childNodes[1].childNodes[0].value,
      description: description.current.childNodes[1].childNodes[0].value,
      price: price.current.childNodes[1].childNodes[0].value,
      city: city.current.childNodes[1].childNodes[0].value,
      image: image.current.childNodes[1].childNodes[0].value,
      capacity: capacity.current.childNodes[1].childNodes[0].value,
      address: address.current.childNodes[1].childNodes[0].value
    }
    fetch('https://zuku-apartments-api.herokuapp.com/api/v1/apartments', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 
        Authorization: auth,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    navigate("/");
    window.location.reload()
  }

  // const btn = '<';

  return (
    <div className='add-apartment-page'>
      {/* <span className='back-button' onClick={()=> navigate('/')}>{btn}</span> */}
      <div onClick={()=> navigate('/')} className="left-button left-right-buttons add-apartment-page-back-btn" >
        <BiLeftArrow className="direction-icons" />
      </div>
      <h1>ADD NEW APARTMENT</h1>
      <form onSubmit={submitter}>
        <TextField label="Name" ref={name} required variant="standard" />
        <TextField label="Description" ref={description} required variant="standard" />
        <TextField label="Link of image" ref={image} required variant="standard" />
        <TextField label="City" ref={city} required variant="standard" />
        <TextField type="number" label="Price" ref={price} required variant="standard"/>
        <TextField type="number" label="Capacity" ref={capacity} required variant="standard"/>
        <TextField label="Address" ref={address} required variant="standard"/>
        <button className='add-apartment-btn' type="submit">ADD APARTMENT</button>
      </form>
    </div>
  );
}
 
export default AddHouse;


