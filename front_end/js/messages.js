
const IP = "192.168.56.1";
const PORT = 3000;
const GET_MESSAGE_REQUEST = "http://" + IP + ":" + PORT + "/message";

function showMessage(response){
  let isText = response.data;
  let contence = document.querySelector(".contence");
  let para = document.querySelector(".message");
 
  if (para !== null){
    para.remove();
  }
  let message = document.createElement("div");
  message.className = "message";
  for (let use of isText){
    if (use.text !== ""){
      let child = document.createElement('div');
      child.className = "paragraph"
      let span = document.createElement("span");
      span.textContent = use.text;
      span.style.background = "gray"
      child.appendChild(span);
      message.appendChild(child);
      contence.appendChild(message)
    }
  }
  text.value = "";
};

function setMessage(){
  if (text.value !== ""){
    let word = {text: text.value};
    axios.post(GET_MESSAGE_REQUEST, word).then(getMessage);
  }
}

function getMessage() {
  axios.get(GET_MESSAGE_REQUEST).then(showMessage);
} 

let p = document.querySelector("p")
let item = JSON.parse(localStorage.getItem("user"));
p.textContent = item.user;

let text = document.querySelector("#text");
let send = document.querySelector(".submit");
send.addEventListener("click", setMessage);

// setInterval(getMessage, 3000);
