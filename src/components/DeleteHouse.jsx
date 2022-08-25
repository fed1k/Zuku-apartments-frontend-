import { useDispatch, useSelector } from "react-redux"
import { GiHamburgerMenu } from "react-icons/gi";
import Swal from "sweetalert2";
import { logger } from "./Home";

const DeleteHouse = () => {
    const data = useSelector((state)=> state);
    const dispatch = useDispatch()

    const removeApartment = (i) => {
      dispatch({type: 'DELETE_APARTMENT', id: i})
      fetch(`https://zuku-apartments-api.herokuapp.com/api/v1/apartments/${i}`, {
        method: 'DELETE',
        headers: { Authorization: JSON.parse(localStorage.getItem('token')) }
      })
    }

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
      <div id="delete-page">
        <GiHamburgerMenu className='hamburger' onClick={logger} />
        {data ? data.map((i)=>(
          <div key={i.id} className="d-page-apartment-container">
            <img className="apartment-image" src={i.image} alt="apartment" />
            <div className="sub-delete-page-container">
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