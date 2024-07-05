const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (e) => {
  e.preventDefault();

  const valueInputEmail = formRef.elements.email.value.trim();
  const valueInputPassword = formRef.elements.password.value.trim();

  if (!valueInputEmail || !valueInputPassword) {
    alert("All form fields must be filled in");
    return;
  }

  const formData = new FormData(formRef);

  const userData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  console.log(userData);

  formRef.reset();
});
