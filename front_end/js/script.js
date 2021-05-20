
const IP = "192.168.56.1";
const PORT = 3000;
const GET_LOGIN_REQUEST = "http://" + IP + ":" + PORT + "/login";

// function user login 
function login(e) {
  e.preventDefault();
  // 1- Create the REQUEST 
  axios.get(GET_LOGIN_REQUEST).then(response => {
    let isValid = response.data;
    let text = "not vlaid";
    let color = "red";
   
    for (let name of isValid){
      if (userName.value == name.name && password.value == name.password){
        text = "Login success!";
        color = "green";
      }
    }
    message.textContent = text;
    message.style.color = color;
  });
  let user = {
    name: userName.value,
    password: password.value
  };
  axios.post(GET_LOGIN_REQUEST, user);

  let body = document.querySelector(".body");
  body.style.display = "none";
  console.log(user)
  console.log(body)
  
}


// MAIN---------------------------------------------------------------------------------------------
const message = document.querySelector("#message");
const userName = document.querySelector("#userName");
const password = document.querySelector("#password");
const btn = document.querySelector("#btn");
btn.addEventListener("click", login);