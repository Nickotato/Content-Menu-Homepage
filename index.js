let userData = {
    email: JSON.parse(localStorage.getItem("email")) || "",
    newsletter: false,
  };
  
  const myModal = new bootstrap.Modal(document.getElementById("myModal"), {});
  
  userData.email ? "" : myModal.show();
  
  window.addEventListener("submit", (event) => {
    event.preventDefault();
  
    userData.email = document.getElementById("email").value;
  
    userData.email.includes("@") && saveEmail();
  });
  
  function saveEmail() {
    localStorage.setItem("email", userData.email);
  }
  