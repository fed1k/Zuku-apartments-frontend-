import React, { useState } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  BiLeftArrow,
  BiChevronRightCircle,
  BiChevronLeftCircle,
} from 'react-icons/bi';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import FormForReserve from './FormForReserve';

const DetailReservation = () => {
  const [state, setState] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const data = useSelector((state) => state.filter((i) => i.id === parseInt(id)));

  const dispatch = useDispatch();

  const removeApartment = (i) => {
    dispatch({ type: 'DELETE_APARTMENT', id: i });
    fetch(`https://zuku-apartments-api.herokuapp.com/api/v1/apartments/${i}`, {
      method: 'DELETE',
      headers: { Authorization: JSON.parse(localStorage.getItem('token')) },
    });
    navigate('/');
  };

  const confirm = (i) => Swal.fire({
    title: 'Are you sure to remove this?',
    showCancelButton: true,
    confirmButtonText: 'Delete',
  }).then((result) => {
    if (result.isConfirmed) {
      removeApartment(i)
    }
  });

  return (
    <div id="detail-p">
      <div className="specific-apartment-back-btn-div">
        <NavLink
          to="/"
          className="left-right-buttons left-btn detail-page-back-btn"
        >
          <BiLeftArrow className="direction-icons" />
        </NavLink>
        {data[0] && (
          <img
            src={data[0].image}
            className="apartment-specific-image"
            alt="apartment"
          />
        )}
      </div>
      <div id="details-info">
        {data[0] && (
          <div>
            <h1>{data[0].name}</h1>
            <p className="detail-description">{data[0].description}</p>
            <div className="apartment-specific-description">
              <div>
                <p>Price</p>
                <p>
                  $
                  {data[0].price}
                  {' '}
                  per month
                </p>
              </div>
              <div>
                <p>Address</p>
                <p>{data[0].address}</p>
              </div>
              <div>
                <p>Capacity</p>
                <p>
                  {data[0].capacity}
                  {' '}
                  sq. m
                </p>
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
          Reserve
          <BiChevronRightCircle className="reserve-btn-icons" />
        </button>
        <button
          type="button"
          className="delete-btn-detail-p"
          onClick={() => confirm(data[0].id)}
        >
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
