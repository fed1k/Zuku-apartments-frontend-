import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  BiLeftArrow,
  BiChevronRightCircle,
  BiChevronLeftCircle,
} from 'react-icons/bi';
import { IoSettingsOutline } from 'react-icons/io5';

import { MdDelete } from 'react-icons/md';
import FormForReserve from './FormForReserve';

const DetailReservation = () => {
  const [state, setState] = useState();
  const { id } = useParams();
  const data = useSelector((state) => state.filter((i) => i.id === parseInt(id)));
  return (
    <div id="detail-p">
      <div className="specific-apartment-back-btn-div">
        <NavLink to="/" className="left-right-buttons left-btn">
          <BiLeftArrow className="direction-icons" />
        </NavLink>
        {data[0] && (
        //   <div>
        <img src={data[0].image} className="apartment-specific-image" alt="apartment" />
          /* </div> */
        )}
      </div>
      <div id="details-info">
        {data[0] && (
          <div>
            <h1>{data[0].name}</h1>
            <div className="apartment-specific-description">
              <div>
                <p>Price</p>
                <p>
                  $
                  {data[0].price}
                </p>
              </div>
              <div>
                <p>Address</p>
                <p>{data[0].address}</p>
              </div>
              <div>
                <p>Capacity</p>
                <p>{data[0].capacity}</p>
              </div>
              <div>
                <p>City</p>
                <p>{data[0].city}</p>
              </div>
            </div>
          </div>
        )}
        <button
          type="button"
          className="reserve-btn-detail-p"
          onClick={() => setState(true)}
        >
          <IoSettingsOutline className="reserve-btn-icons" />
          {' '}
          Reserve
          {' '}
          <BiChevronRightCircle className="reserve-btn-icons" />
        </button>
        <button type="button" className="delete-btn-detail-p">
          <MdDelete />
          Delete
          <BiChevronLeftCircle />
        </button>
        {state && <FormForReserve state={setState} />}
      </div>
    </div>
  );
};

export default DetailReservation;
