
const IP = "192.168.56.1";
const PORT = 3000;
const GET_MESSAGE_REQUEST = "http://" + IP + ":" + PORT + "/message";

function sendMessage(e){
  e.preventDefault();
  let message = document.querySelector(".message");
  let text = document.querySelector("#text");
  if (text.value !== ""){
    let word = {text: text.value};
    axios.post(GET_MESSAGE_REQUEST, word);
  }

  axios.get(GET_MESSAGE_REQUEST).then(response => {
    let isText = response.data;
    for (let use of isText){
      if (user.value == use.name){
        let child = document.createElement('div');
        child.className = "paragraph"
        let span = document.createElement("span");
        span.textContent = use.text;
        child.appendChild(span);
        message.appendChild(child);
      }
    }
  });
  text.value = "";
}

let user = document.querySelector("h1");
let send = document.querySelector(".submit");
send.addEventListener("click", sendMessage);
