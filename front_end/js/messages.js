
const IP = "192.168.88.4";
const PORT = 3000;
const GET_MESSAGE_REQUEST = "http://" + IP + ":" + PORT + "/message";

function showMessage(e){

  if (text.value !== ""){
    let word = {user : item.user , text:text.value};
    axios.post(GET_MESSAGE_REQUEST, word);
  }
  
  let contence = document.querySelector(".contence");
  let para = document.querySelector(".message");
 
  if (para !== null){
    para.remove();
  }
  let message = document.createElement("div");
  message.className = "message";
  axios.get(GET_MESSAGE_REQUEST).then(response => {
    let isText = response.data;
    for (let use of isText){
      if (use.text !== ""){
        let child = document.createElement('div');
        child.className = "paragraph"
        let span = document.createElement("span");
        let p = document.createElement("p");
        span.textContent = use.text;
        if (use.user == item.user){
          p.textContent = item.user;
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
        child.appendChild(p);
        message.appendChild(child);
        contence.appendChild(message)
      }
    }
      
  });
  text.value = "";
};

let name = document.querySelector("h3")
let item = JSON.parse(localStorage.getItem("user"));
name.textContent = item.user;

let text = document.querySelector("#text");
let send = document.querySelector(".submit");
send.addEventListener("click", showMessage);

