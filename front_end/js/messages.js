
const IP = "192.168.88.32";
const PORT = 3000;
const GET_MESSAGE_REQUEST = "http://" + IP + ":" + PORT + "/message";
// const GET_MESSAGE_REQUEST = "https://skyface.herokuapp.com/message";

function showMessage(response){
  let contence = document.querySelector(".contence");
  let para = document.querySelector(".message");
  if (para !== null){
    para.remove();
  }
  let message = document.createElement("div");
  message.className = "message";
  let isText = response.data;
  for (let use of isText){
    if (use.text !== ""){
      let child = document.createElement('div');
      child.className = "paragraph"
      let span = document.createElement("span");
      span.textContent = use.text;
      if (use.user == item.user){
        span.style.background = "green";
      }else{
        span.style.marginLeft = 0 + "px";
        child.style.justifyContent = "flex-start";
        span.style.borderTopRightRadius = "25px";
        span.style.borderBottomRightRadius = "25px";
        span.style.borderTopLeftRadius= "25px";
        span.style.borderBottomLeftRadius = "0px";
        span.style.marginLeft = "10px";
      }
      child.appendChild(span);
      message.appendChild(child);
      contence.appendChild(message)
    } 
  } 
};

function loadMessage(){
  axios.get(GET_MESSAGE_REQUEST).then(showMessage);
};

function sendMessage(){
  if (text.value !== ""){
    let word = {user : item.user , text:text.value};
    axios.post(GET_MESSAGE_REQUEST, word).then(showMessage);
  }
  let sound = document.getElementById("audio");
  sound.play();
  text.value = "";

}

let userNam = document.querySelector("h3")
let item = JSON.parse(localStorage.getItem("user"));
userNam.textContent = item.user;


let btnemoji = document.getElementById('emoji-btn');
const picker = new EmojiButton();
document.addEventListener('DOMContentLoaded', () =>{
    picker.on('emoji', emoji =>{
        document.querySelector('input').value += emoji;
    });
    btnemoji.addEventListener('click', () => {
        picker.togglePicker(btnemoji);
    });
});

let text = document.querySelector("#text");
let send = document.querySelector(".submit");
send.addEventListener("click", sendMessage);

setInterval(loadMessage,500);