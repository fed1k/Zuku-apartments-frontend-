import Swal from 'sweetalert2';

const signUpModal = () => {
  Swal.fire({
    title: 'Sign Up',
    html: ` <input type="text" id="swal-input1" class="swal2-input" placeholder="Enter your Full Name" required>
            <input type="email" id="swal-input2" class="swal2-input" placeholder="Enter your email address" required>
            <input type="password" id="swal-input3" class="swal2-input" placeholder="Enter your password" required>`,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: 'Sign Up',
    reverseButtons: true,
    allowOutsideClick: false,
    confirmButtonColor: '#99eb1b',
    preConfirm: () => {
      // validate required fields
      if (!document.getElementById('swal-input1').value 
      || !document.getElementById('swal-input2').value 
      || !document.getElementById('swal-input3').value
      || !document.getElementById('swal-input2').value.match(/^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      )
      {
        Swal.showValidationMessage('Fill in all fields and enter a valid email address.');
      } else {
        // send data to backend
        const name = document.getElementById('swal-input1').value;
        const email = document.getElementById('swal-input2').value;
        const password = document.getElementById('swal-input3').value;
        const admin = false;
        const user = {
          name, email, password, admin
        };
        // attempt signup 
        fetch('https://zuku-apartments-api.herokuapp.com/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({user})
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
    //allowOutsideClick: () => !Swal.isLoading(),
  });
};
export default signUpModal;
