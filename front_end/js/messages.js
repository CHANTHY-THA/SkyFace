
// const IP = "192.168.88.29";
// const PORT = 3000;
// const GET_MESSAGE_REQUEST = "http://" + IP + ":" + PORT + "/message";
const GET_USERS = "https://skyface.herokuapp.com/user";
const GET_MESSAGE_REQUEST = "https://skyface.herokuapp.com/message";

function showMessage(response){
  let isText = response.data;
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
let pro = document.querySelector("h2")
let item = JSON.parse(localStorage.getItem("user"));
userNam.textContent = item.user;
pro.textContent = item.user;

// ------------Emogi-----------------------------------------

let btnemoji = document.getElementById('emoji-btn');
const picker = new EmojiButton();
document.addEventListener('DOMContentLoaded', () =>{
    picker.on('emoji', emoji =>{
        document.querySelector('#text').value += emoji;
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
  userList.style.display = "block";
}

let searchButton = document.querySelector(".searchButton");
let profil = document.querySelector(".profil");
let header = document.querySelector(".header");
let contence = document.querySelector(".contence");
let sender = document.querySelector(".sender");
let back = document.querySelector("#back");
back.addEventListener("click", Homepage)

// ---------------Display users----------------------

function displayUsers(){
  axios.get(GET_USERS).then(response => {
    let lists = response.data;
    let boy = "../image/images.png"
    let girl = "../image/girl1.png"
    let letter = ""
    for (let use of lists){
      let user = document.createElement("div");
      user.className = "user";
      let img = document.createElement("img");
      let person = document.querySelector("#person");
      console.log(item)
      if (item.gender == "male"){
        person.setAttribute("src", boy);
      }else{
        person.setAttribute("src", girl);
      }

      let h1 = document.createElement("h1");
      h1.textContent = use.user;
      if (use.gender == "male"){
        img.setAttribute("src", boy);
      }else{
        img.setAttribute("src", girl);
      }
      
      letter = use.user;
      ListName.push(letter)
      user.appendChild(img);
      user.appendChild(h1);
      userList.appendChild(user);
    }
  })
};

let ListName = [];
let userList = document.querySelector(".userList");
displayUsers()

// --------------------Search user-------------------------------------
function SearchUser(){
  let find = search.value.toLowerCase()
  let items = document.querySelectorAll(".user")
  for (let item of items){
    let words = item.lastChild.textContent.toLocaleLowerCase();
    if (words.indexOf(find) === -1){
      item.style.display = "none";
    }else{
      item.style.display = "block";
      item.style.display = "flex";
    }
  }
  
}

let search = document.querySelector("#search")
search.addEventListener("keyup", SearchUser);
