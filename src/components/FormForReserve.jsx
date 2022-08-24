import React from 'react';
import { FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';
import AddReservation from './AddReservation';

const FormForReserve = ({ state }) => (
  <div className="popup-main-container">
    <div>
      <FaWindowClose className="close-icon-popup" onClick={() => state(false)} />
      {/* <AddReservation /> */}
    </div>
  </div>
);

FormForReserve.propTypes = {
  state: PropTypes.func.isRequired,
};

export default FormForReserve;
