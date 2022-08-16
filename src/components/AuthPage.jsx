import React from 'react'
import '../css/auth_page.css'
import homeIcon from '../img/icons8-real-estate-96.png';
import doorKey from '../img/icons8-key-96.png';
import Swal from 'sweetalert2';

export default function AuthPage() {

  const signUpModal = () => {
    Swal.fire({
      title: 'Sign Up',
      html: ` <input id="swal-input1" class="swal2-input" placeholder="First Name" required>
              <input id="swal-input2" class="swal2-input" placeholder="Last Name" required>
              <input id="swal-input3" class="swal2-input" placeholder="Email" required>
              <input id="swal-input4" class="swal2-input" placeholder="Password" required>`,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Sign Up',
      reverseButtons: true,
      confirmButtonColor: '#99eb1b',
      preConfirm: () => {
        // validate required fields
        if (!document.getElementById('swal-input1').value || !document.getElementById('swal-input2').value || !document.getElementById('swal-input3').value || !document.getElementById('swal-input4').value) {
          Swal.showValidationMessage(`Please fill in all fields`)
        }else{
          // send data to backend
          const firstName = document.getElementById('swal-input1').value;
          const lastName = document.getElementById('swal-input2').value;
          const email = document.getElementById('swal-input3').value;
          const password = document.getElementById('swal-input4').value;
          const data = {firstName, lastName, email, password}
          // attempt signup
          fetch('http://localhost:5000/api/v1/users/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data => {
            if(data.status === 'success'){
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: data.message,
                confirmButtonColor: '#99eb1b',
              })
            }else{
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: data.message,
                confirmButtonColor: '#99eb1b',
              })
            }
          })
          .catch(err => {
            console.log(err);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Something went wrong. Please try again later',
              confirmButtonColor: '#99eb1b',
            });
          })
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    });
  }
  
      
  return (
    <div id="auth_page">
      <header id="auth-header">
        <img src={homeIcon} alt="Home" />
        <img src={doorKey} alt="Keys" />
      </header>
      <section>
        <h1>Book a comfy apartment</h1>
        <p>
          Vaincu insensé majesté la ce approchons et dit.
          Abondent approchons tes déplore air visage a flanc.
          Qui chaque pleure florentines grâces l'art de un,  tes atrocement
          d'athlete faite son. Le la pleurs fait le tout qui dans, monstre majesté
        </p>
        <div class="actions">
          <button onClick={() => signUpModal()}>Sign up</button>
          <button>Sign in</button>
        </div>
      </section>
    </div>
  )
}
