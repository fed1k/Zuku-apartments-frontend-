import React from 'react';
import { FaWindowClose } from "react-icons/fa"
 
const FormForReserve = ({state}) => {

  return (
    <div className='popup-main-container'>
      <div>
        <FaWindowClose className='close-icon-popup' onClick={()=> state(false)}/>
        <h1>Heeey i am a popup</h1>
        <button>Salom</button>
      </div>
    </div>
  );
}

export default FormForReserve