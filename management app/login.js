let userEmail = document.querySelector("#email");

let userPass = document.querySelector("#password");
let databaseEmail = "admin@gmail.com";
let databasePassword = "12345678";
function userLogin() {
  event.preventDefault();
  if (userEmail.value === databaseEmail) {
    if (userPass.value.length > 6) {
      if (userPass.value === databasePassword) {
        let userEmailData = userEmail.value;
        let userPassData = userPass.value;
       
        userEmail.value = "";
        userPass.value = "";
        
        Swal.fire({
            title: 'Hi '+ userEmailData,
            text: 'You password is '+userPassData,
            icon: 'success',
            confirmButtonText: 'OK'
          }).then((result) => {
            
            if (result.isConfirmed) {
            
            }
          });
       
      } else {
        Swal.fire({
            icon: 'error',
            title: "Your Password is Incorrect",
        });
      }
    }else{
        Swal.fire("Your Password should be greater than 6 characters");
    }
  } else {
    Swal.fire({
        title: 'Invalid Email',
        icon: 'warning',
    });
  }
}