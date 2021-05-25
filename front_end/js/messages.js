
// const IP = "192.168.88.30";
// const PORT = 3000;
// const GET_MESSAGE_REQUEST = "http://" + IP + ":" + PORT + "/message";
const GET_MESSAGE_REQUEST = "https://skyface.herokuapp.com/message";

function showMessage(response){
  let isText = response.data;
  console.log(isText.length)
  let contence = document.querySelector(".contence");
  let para = document.querySelector(".message");
  if (para !== null && isText.length !== 0){
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
  let sound = document.getElementById("audio");

  if (text.value !== ""){
    sound.play();
    let word = {user : item.user , text:text.value};
    axios.post(GET_MESSAGE_REQUEST, word).then(showMessage);
  }
 
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

// -----------Display page----------------------------------------

function Homepage(){
  header.style.display = "none";
  contence.style.display = "none";
  sender.style.display = "none";
  profil.style.display = "block";
  searchButton.style.display = "block";
}

let searchButton = document.querySelector(".searchButton");
let profil = document.querySelector(".profil");
let header = document.querySelector(".header");
let contence = document.querySelector(".contence");
let sender = document.querySelector(".sender");
let back = document.querySelector("#back");
back.addEventListener("click", Homepage)