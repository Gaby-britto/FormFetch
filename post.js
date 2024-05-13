const nameUser = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("signup");

button.addEventListener("click", function(event) {
    event.preventDefault();

    const userData = JSON.stringify({
        name: nameUser.value,
        email: email.value,
        password: password.value
    });

    fetch("http://10.92.198.38:8080/auth/signup", {
        method: "POST",
        body: userData,
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then((result) => {
      return result.json(); 
    })
    .then((data) => console.log(data))
    .catch((err) => {
        console.log(err)
    });
});



const emailLogin = document.getElementById("emailLogin");
const passwordLogin = document.getElementById("passwordLogin");
const button1 = document.getElementById("submit1");
button1.addEventListener("click", function(event) {
  event.preventDefault();
 
  const userData1 = JSON.stringify({
      email: emailLogin.value,
      password: passwordLogin.value,
  });
 
  fetch("http://10.92.198.38:8080/auth/signin", {
    method: "POST",
    body: userData1,
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    // Verifica se a resposta da API contém um token
    if (data.token) {
      // Armazena o token no localStorage
      localStorage.setItem('token', data.token);
      console.log('Token armazenado com sucesso:', data.token);
      window.location.href = "send.html";
    } else {
      console.log('Token não encontrado na resposta da API');
    }
  })
  .catch((err) => {
    console.log(err);
  });
});
