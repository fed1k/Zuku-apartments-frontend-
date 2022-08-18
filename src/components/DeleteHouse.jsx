import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { auth } from "../redux/reducer";

const DeleteHouse = () => {
    const data = useSelector((state)=> state);
    const dispatch = useDispatch()

    const removeApartment = (i) => {
        dispatch({type: 'DELETE_APARTMENT', id: i})
        fetch(`https://zuku-apartments-api.herokuapp.com/api/v1/apartments/${i}`, {
            method: 'DELETE',
            headers: { Authorization: auth }
        })
    }

    const confirm = (i) => {
        return  confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to delete this apartment.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => removeApartment(i)
              },
              {
                label: 'No',
                onClick: () => window,
              }
            ]
        }); 
    }

    return (
        <div id="delete-page">
            {data ? data.map((i)=>(
                <div key={i.id} className="d-page-apartment-container">
                    <img className="apartment-image" src={i.image} alt="apartment" />
                    <div>
                      <h3>{i.name}</h3>
                      <span>{i.description}</span>
                    </div>
                    <button type="button" onClick={()=>confirm(i.id)}>DELETE</button>
                </div>
            )): <h1>LOADING...</h1>}
        </div>
    );
}
 
export default DeleteHouse 