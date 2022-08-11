import React, { useState } from 'react'
import { useParams, NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { BiLeftArrow } from "react-icons/bi"
import FormForReserve from "./FormForReserve"
import { IoSettingsOutline } from "react-icons/io5"
import { BiChevronRightCircle } from "react-icons/bi"
import { MdDelete } from "react-icons/md"
import { BiChevronLeftCircle } from "react-icons/bi"

const DetailReservation = () => {
    const [state, setState] = useState(false)
    let { id } = useParams()
    const data = useSelector((state)=> state.filter((i)=> i.id === parseInt(id)))
    return (
        <div id='detail-p'>
            { data[0] && ( <h1>{data[0].title}</h1> )}
            <NavLink to="/" className="left-right-buttons left-btn"><BiLeftArrow className="direction-icons"/></NavLink>
            <button className='delete-btn-detail-p'><MdDelete /> Delete <BiChevronLeftCircle /></button>
            <button className='reserve-btn-detail-p' onClick={()=> setState(true)}>
                <IoSettingsOutline className='reserve-btn-icons'/> Reserve <BiChevronRightCircle className='reserve-btn-icons'/>
            </button>
            { state && (<FormForReserve state={setState}/>) }
        </div>
    );
}
 
export default DetailReservation;
