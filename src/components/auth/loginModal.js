import Swal from "sweetalert2";

const loginModal = () => {
  Swal.fire({
    title: "Login",
    html: `<input id="swal-input1" class="swal2-input" placeholder="Email" required>
           <input id="swal-input2" class="swal2-input" placeholder="Password" required>`,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: "Login",
    reverseButtons: true,
    confirmButtonColor: "#99eb1b",
    preConfirm: () => {
      // validate required fields
      if (
        !document.getElementById("swal-input1").value ||
        !document.getElementById("swal-input2").value
      ) {
        Swal.showValidationMessage(`Please fill in all fields`);
      } else {
        // send data to backend
        const email = document.getElementById("swal-input1").value;
        const password = document.getElementById("swal-input2").value;
        const data = { email, password };
        // attempt login
        fetch("http://localhost:5000/api/v1/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(data => {
            if (data.status === "success") {
              Swal.fire({
                icon: "success",
                title: "Success",
                text: data.message,
                confirmButtonColor: "#99eb1b"
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Error",
                text: data.message,
                confirmButtonColor: "#99eb1b"
              });
            }
          })
          .catch(err => {
            console.log(err);
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Something went wrong. Please try again later",
              confirmButtonColor: "#99eb1b"
            });
          });
      }
    }
  });
};

export default loginModal;