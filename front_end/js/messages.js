
const IP = "192.168.56.1";
const PORT = 3000;
const GET_MESSAGE_REQUEST = "http://" + IP + ":" + PORT + "/message";

function showMessage(response){
  let isText = response.data;
  let message = document.querySelector(".message");
 
  for (let use of isText){
    if (use.text !== ""){
      let child = document.createElement('div');
      child.className = "paragraph"
      let span = document.createElement("span");
      span.textContent = use.text;
      child.appendChild(span);
      message.appendChild(child);
    }
  }
  text.value = "";
};

function setMessage(){
  if (text.value !== ""){
    let word = {text: text.value};
    console.log(word)
    axios.post(GET_MESSAGE_REQUEST, word).then(showMessage);
  }
}

function getMessage() {

  axios.get(GET_MESSAGE_REQUEST).then(setMessage);

} 

let text = document.querySelector("#text");

let send = document.querySelector(".submit");
send.addEventListener("click", getMessage);

// setInterval(getMessage, 1000);
