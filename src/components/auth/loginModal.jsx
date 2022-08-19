import Swal from 'sweetalert2';

const loginModal = () => {
  //Create the login modal
  Swal.fire({
    title: 'Login',
    html: `<input type="email" id="swal-input1" class="swal2-input" placeholder="Enter your email address" required>
           <input type="password" id="swal-input2" class="swal2-input" placeholder="Enter your password" required>`,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: 'Login',
    reverseButtons: true,
    confirmButtonColor: '#99eb1b',
    preConfirm: () => {
      // validate if required fields are not empty or the email address is valid
      if (  
        !document.getElementById('swal-input1').value
        || !document.getElementById('swal-input2').value
        || !document.getElementById('swal-input1').value.match(/^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ) {
        Swal.showValidationMessage('Fill in all fields and enter a valid email address.');
      } else {
        // send data to the API
        const email = document.getElementById('swal-input1').value;
        const password = document.getElementById('swal-input2').value;
        const data = { email, password };
        // attempt login
        fetch('https://zuku-apartments-api.herokuapp.com/users/sign_in', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.status === 'success') {
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: data.message,
                confirmButtonColor: '#99eb1b',
              });
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error',
                text: data.message,
                confirmButtonColor: '#99eb1b',
              });
            }
          })
          .catch((err) => {
            console.log(err);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Something went wrong. Please try again later',
              confirmButtonColor: '#99eb1b',
            });
          });
      }
    },
  });
};

export default loginModal;
