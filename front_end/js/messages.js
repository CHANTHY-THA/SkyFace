
const IP = "192.168.56.1";
const PORT = 3000;
const GET_MESSAGE_REQUEST = "http://" + IP + ":" + PORT + "/messages";

function sendMessage(e){
  e.preventDefault();

  let message = document.querySelector(".message");
  let text = document.querySelector("#text");
  console.log(text.value)

  let word = {text:text.value};
  axios.post(GET_MESSAGE_REQUEST, word)
  console.log(word)

  axios.get(GET_MESSAGE_REQUEST).then(response => {
    let isText = response.data;
    for (let use of isText){
      let child = document.createElement('div');
      child.className = "paragraph"
      let span = document.createElement("span");
      child.appendChild(span);
      span.textContent = use.text;
      message.appendChild(child);
    }
  });
  text.value = "";
}

// function loadMessage(){
  // axios.get(GET_MESSAGE_REQUEST).then(sendMessage);
// }

let send = document.querySelector(".submit");
send.addEventListener("click", sendMessage);

// loadMessage();