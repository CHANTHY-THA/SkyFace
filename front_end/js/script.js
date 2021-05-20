const IP = "192.168.56.1";
const PORT = 3000;
const GET_LOGIN_REQUEST = "http://" + IP + ":" + PORT + "/login";

// function user login 
function login(e) {
  e.preventDefault();
  
  // 1- TODO: Create the REQUEST
  // put the correct request;
  let querry =  GET_LOGIN_REQUEST;      
  axios.get(querry).then(response => {
    let isValid = response.data;
    let text = "not vlaid";
    let color = "red";
    //2- TODO: check to change color to green and text= "Login success!" if login success.
    for (let name of isValid){
      if (userName.value == name.name && password.value == name.password){
        text = "Login success!";
        color = "green";
      }
    }
    message.textContent = text;
    message.style.color = color;
  });
}

// MAIN---------------------------------------------------------------------------------------------
const message = document.querySelector("#message");
const userName = document.querySelector("#userName");
const password = document.querySelector("#password");
const btn = document.querySelector("#btn");

btn.addEventListener("click", login);
