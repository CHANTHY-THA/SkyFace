
// const IP = "192.168.43.174";
// const PORT = 3000;
// const GET_MESSAGE_REQUEST = "http://" + IP + ":" + PORT + "/message";
// const GET_USERS = "http://" + IP + ":" + PORT + "/user";
// const GET_USERSID = "http://" + IP + ":" + PORT + "/userId";
// const GET_DELETE = "http://" + IP + ":" + PORT + "/userDelete/:index";

const GET_USERSID = "https://skyface.herokuapp.com/userId";
const GET_DELETE = "https://skyface.herokuapp.com/userDelete/:index";
const GET_USERS = "https://skyface.herokuapp.com/user";
const GET_MESSAGE_REQUEST = "https://skyface.herokuapp.com/message";

let emojiLists = [
  {name :":)" ,icon: "😊"},
  {name :";(" ,icon: "😌"},
  {name :"><" ,icon: "😆"},
  {name :":p" ,icon: "😋"},
  {name :"<3" ,icon: "❤️"},
  {name :":o" ,icon: "😱"},
  {name :":D" ,icon: "😛"},
  {name :":" ,icon: "😶"},
  {name :":|" ,icon: "😐"},
  {name :"$$" ,icon: "🤑"},
  {name :":x" ,icon: "😘"},
  {name :":(" ,icon: "☹️"},
  {name :":E" ,icon: "😁"},
  {name :":#" ,icon: "🤐"},
  {name :":@" ,icon: "😵"},
  {name :"8)" ,icon: "🤓"},
  {name :"^~^" ,icon: "😖"},
  {name :";<" ,icon: "🤧"},
  {name :"" ,icon: "😇"},
  {name :":}" ,icon: "🤡"},
  {name :":.)" ,icon: "😭"},
  {name :"b-)" ,icon: "😎"},
  {name :">_<" ,icon: "😡"},
  {name :":>" ,icon: "👽"}
  ];


function showMessage(response) {
  let isText = response.data;
  let indexOfmessage = -1;

  let contence = document.querySelector(".contence");
  let para = document.querySelector(".message");
  if (para !== null && isText.length !== 0) {
    para.remove();
  }
  let message = document.createElement("div");
  message.className = "message";
  for (let use of isText) {
    if (use.text !== "") {
      let child = document.createElement('div');
      child.className = "paragraph"
     
      child.id = indexOfmessage += 1;
      let span = document.createElement("span");
      let remove = document.createElement("img");
      remove.addEventListener("click", Delete);

      let spanImg = document.createElement("img");
      spanImg.addEventListener("click", EditMessage);

      let Person = document.createElement("img");
      let Namechat = document.createElement("p");
      Person.className = "chatwith";
      spanImg.className = "spanImg";
      span.textContent = use.text;
      if (use.user == item.user) {
        remove.src = "../image/delete.png";
        remove.style.width = "30px";
        remove.style.height = "30px";
        remove.style.marginLeft = "0%";

        spanImg.src = "../image/button.webp";
        spanImg.style.width = 20 + "px";
        spanImg.style.height = 3 + "vh";
        spanImg.style.marginLeft = 1 + "%";
        span.style.background = "#318CE7";
        if (use.styleBold == "bold"){
          span.style.fontWeight = "bold";
        }

        if (use.styleItalic == "italic"){
          span.style.fontStyle = "italic";
        }
      } else {

        if (use.styleBold == "bold"){
          span.style.fontWeight = "bold";
        }
        if (use.styleItalic == "italic"){
          span.style.fontStyle = "italic";
        }
        spanImg.src = "../image/button.webp";
        spanImg.style.width = 20 + "px";
        spanImg.style.height = 3 + "vh";
        spanImg.style.marginBottom = "7%";
        spanImg.style.marginLeft = "0";
        if (use.gender == "female"){
          Person.src = "../image/girl1.png";
        }else{
          Person.src = "../image/images.png";
        };
        Person.style.width = "30px";
        Person.style.height = "30px";
        Person.style.marginTop = 3 + "%";
        
        span.style.background = "gray";
        span.style.marginBottom = "5%";
        child.style.justifyContent = "flex-start";
        span.style.borderTopRightRadius = "25px";
        span.style.borderBottomRightRadius = "25px";
        span.style.borderTopLeftRadius = "25px";
        span.style.borderBottomLeftRadius = "0px";
        span.style.marginLeft = "10px";
        Namechat.textContent = use.user;
        Namechat.style.marginLeft= "12%";
        Namechat.style.marginTop = "0";
        Namechat.style.fontSize = "12px";
        Namechat.style.color = "rgba(211, 199, 199, 0.856)";
        child.appendChild(Person);
      }

      child.appendChild(span);
      child.appendChild(spanImg);
      child.appendChild(remove);
      message.appendChild(child);
      message.appendChild(Namechat);
      contence.appendChild(message)
    }
  }
};

function loadMessage() {
  axios.get(GET_MESSAGE_REQUEST).then(showMessage);
};

function sendMessage() {
  let sound = document.getElementById("audio");
  if (text.value !== "") {
    for (let felling of emojiLists){
      if (text.value == felling.name){
        text.value = "";
        text.value += felling.icon;
      }
    }
    sound.play();
    let word = {
      user: item.user,
      text: text.value ,
      styleBold : fontBold ,
      styleItalic : fontItalic,
      gender:item.gender ,
      };
    axios.post(GET_MESSAGE_REQUEST, word).then(showMessage);
  }
  text.value = "";
};

// -----------------------------------------------------------------

let isBold = true;
function Boldtext() {
  if(text.value !== ""){
    if (isBold){
      isBold = false;
      fontBold = "bold"
      text.style.fontWeight = "bold";
    }else{
      isBold = true;
      text.style.fontWeight = "normal";
      fontBold = ""
    }
  }
}

let itafound = true;
function Italictext() {
  if (text.value !== ""){
    if (itafound){
      itafound = false
      fontItalic = "italic"
      text.style.fontStyle = "italic";
    }else{
      itafound = true;
      text.style.fontStyle = "normal";
      fontItalic = ""
    }
  }
}

let fontBold = "";
let fontItalic = "";

let userNam = document.querySelector("h3")
let homeName = document.querySelector("#homeName")
let h1 = document.querySelector("h1")
let item = JSON.parse(localStorage.getItem("user"));
userNam.textContent = item.user;
h1.textContent = item.user;
homeName.textContent = item.user;
h1.style.color = "white";
h1.style.textAlign = "center";

let bold = document.querySelector("#bold");
let italic = document.querySelector("#italic");
let text = document.querySelector("#text");
let send = document.querySelector(".submit");
send.addEventListener("click", sendMessage);
bold.addEventListener("click", Boldtext);
italic.addEventListener("click", Italictext);

function IsNotstyle(){
  if (text.value == ""){
    text.style.fontStyle = "normal";
    text.style.fontWeight = "normal";
    fontBold = "";
    fontItalic = "";
  }
}
loadMessage()
setInterval(IsNotstyle, 300);
setInterval(loadMessage, 3000);

// ------------Emogi-----------------------------------------

let btnemoji = document.getElementById('emoji-btn');
const picker = new EmojiButton();
document.addEventListener('DOMContentLoaded', () => {
  picker.on('emoji', emoji => {
    document.querySelector('#text').value += emoji;
  });
  btnemoji.addEventListener('click', () => {
    picker.togglePicker(btnemoji);
  });
});

// -----------Display page----------------------------------------

function Homepage() {
  sender.style.display = "none";
  header.style.display = "none";
  contence.style.display = "none";
  profil.style.display = "block";
  searchButton.style.display = "block";
  userList.style.display = "block";
  homePage.style.display = "block";
}

function Logout(){
  window.location.href = "../index.html"
}

let homePage = document.querySelector(".HomePage");
let searchButton = document.querySelector(".searchButton");
let profil = document.querySelector(".profil");
let header = document.querySelector(".header");
let contence = document.querySelector(".contence");
let sender = document.querySelector(".sender");
let threeDot = document.querySelector("#threeDot");
let back = document.querySelector("#back");
back.addEventListener("click", Homepage);
threeDot.addEventListener("click", Logout);

// ---------------Display users----------------------

function displayUsers() {
  axios.get(GET_USERS).then(response => {
    let lists = response.data;
    let boy = "../image/images.png"
    let girl = "../image/girl1.png"
    let letter = ""
    for (let use of lists) {
      let user = document.createElement("div");
      user.className = "user";
      let img = document.createElement("img");
      let person = document.querySelector("#person");
      let personSetting = document.querySelector("#personSetting");
      let PersonalChat = document.querySelector("#PersonalChat");
      if (item.gender == "male") {
        person.setAttribute("src", boy);
        homeImage.setAttribute("src", boy);
        personSetting.setAttribute("src", boy);
        PersonalChat.setAttribute("src", boy);
      } else {
        person.setAttribute("src", girl);
        personSetting.setAttribute("src", girl);
        PersonalChat.setAttribute("src", girl);
        homeImage.setAttribute("src", girl);
      }

      let h1 = document.createElement("h1");
      h1.id = "UserNameList";
      h1.textContent = use.user;
      if (use.gender == "male") {
        img.setAttribute("src", boy);
      } else {
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
let homeImage = document.querySelector("#homeImage")
let userList = document.querySelector(".userList");
displayUsers()

// --------------------Search user-------------------------------------

function SearchUser() {
  let find = search.value.toLowerCase()
  let items = document.querySelectorAll(".user")
  for (let item of items) {
    let words = item.lastChild.textContent.toLocaleLowerCase();
    if (words.indexOf(find) === -1) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
      item.style.display = "flex";
    }
  }

}

let search = document.querySelector("#search")
search.addEventListener("keyup", SearchUser);

// ------------------bold and italic---------------------------------------

let isFound = true;
function Listofbolditalic() {
  if (isFound) {
    isFound = false;
    send.style.marginLeft = 7 + "%";
    soundImage.style.display = "none";
    bold.style.display = "block"
    italic.style.display = "block"
  } else {
    send.style.marginLeft = 12 + "%";
    soundImage.style.display = "block";
    bold.style.display = "none"
    italic.style.display = "none"
    isFound = true;
  };

};

let soundImage = document.querySelector("#soundImage");
let addButton = document.querySelector("#addButton");
addButton.addEventListener("click", Listofbolditalic);

// ------------------change setting--------------------------------------------

function Changesetting() {
  change.style.display = "block";
  face.style.display = "none"
}

function goBacksetting() {
  change.style.display = "none";
  face.style.display = "block";
  contence.style.background = color.value;
}

let message = document.querySelector(".message");
let color = document.querySelector("#color");
let goBack = document.querySelector("#goBack");
let change = document.querySelector(".change");
let setting = document.querySelector("#setting");
let face = document.querySelector(".face");

setting.addEventListener("click", Changesetting);
goBack.addEventListener("click", goBacksetting);

// ----------------Home setting----------------------------------------

function HomeSetting(){
  homepage.style.display = "none";
  homeProfile.style.display = "block";
}

function Backtohome(){
  homepage.style.display = "block";
  homeProfile.style.display = "none";
}

let homepage = document.querySelector(".HomePage")
let backHome = document.querySelector("#backHome")
let homeProfile = document.querySelector(".homeProfile")
let PersonalChat = document.querySelector("#PersonalChat")
PersonalChat.addEventListener("click", HomeSetting);
backHome.addEventListener("click", Backtohome);

function changeHome(){
  if(checkbox.checked){
    threeDot.src = "../image/logout-rounded.png";
    homepage.style.background = "#000";
    homeProfile.style.background = "#000";
    homepage.style.color = "#fff";
    chat.style.color = "#fff";
    search.style.background = "#fff";
    search.style.color = "#000";
  }else{
    threeDot.src = "../image/logout-rounded(1).png";
    homepage.style.background = "#fff";
    homeProfile.style.background = "teal";
    chat.style.color = "#000";
    homepage.style.color = "#000";

    search.style.background = "rgba(0,0,0,0.5)";
    search.style.color = "#000";
  }
}

let chat = document.querySelector("#chat");
let checkbox = document.querySelector("#checkbox");
checkbox.addEventListener("click" , changeHome);

// --------------edit message----------------------------------------

function EditMessage(event){
  send.style.display = "none";
  let edit = document.querySelector(".edit");
  edit.style.display = "block"
  let index = event.target.parentElement;

  axios.get(GET_MESSAGE_REQUEST).then(response => {
    let miss = response.data;
    let indexOfuser = parseInt(index.id);
    let next = miss[indexOfuser].text;
    console.log(next)

    text.value = miss[indexOfuser].text;

    edit.addEventListener("click", () => {
      let editId = {id:index.id,message:text.value};
      axios.put(GET_USERSID,editId);

      edit.style.display = "none";
      send.style.display = "block";
      text.value = "";
    })
  });
  console.log(parseInt(index.id));

};

function Delete(event){
  let index = event.target.parentElement;

  let deleteId = index.id ;
  let position = deleteId
  console.log(position)
  axios.delete(GET_DELETE+'/' + position).then(loadMessage);
}

