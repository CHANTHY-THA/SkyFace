
// const IP = "192.168.43.174";
// const PORT = 3000;
// const GET_LOGIN_REQUEST = "http://" + IP + ":" + PORT + "/user";

const GET_LOGIN_REQUEST = "https://skyface.herokuapp.com/user";

function createUser(e){
    e.preventDefault();
    let gender = document.getElementsByName("gender");
    let gen = "";
    for (let get of gender){
        if (get.checked){
            gen = get.value ;
        };
    };
    let user = {user : firstName.value + " " + lastName.value , email : email.value , password:pass.value ,gender: gen};
    if ( firstName.value !== "" && lastName.value !== "" && email.value !== "" && pass.value !== "" && confirm.value !== ""){
        let name = {user : firstName.value + " " + lastName.value, password: pass.value , gender: gen};
        localStorage.setItem("user",JSON.stringify(name));
        axios.post(GET_LOGIN_REQUEST, user);
        loginUser.style.display = "none";
        window.location.href = "../chat/index.html";
    }
}

let loginUser = document.querySelector(".login");
let create = document.querySelector(".createUser");
let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname");
let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
let compear = document.querySelector("#confirm");
let addUser = document.querySelector("#create");
let cancel = document.querySelector("#cancel");
let back = document.querySelector("#back");

addUser.addEventListener("click",createUser);

// ------------------------------------------------

function show(e){
    e.preventDefault();
    form.style.display = "none";
    create.style.display = "block";
}
function Back(e){
    e.preventDefault();
    form.style.display = "block";
    create.style.display = "none";
}
function Cancel(e){
    e.preventDefault();
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    pass.value = "";
    compear.value = "";
}

let form = document.querySelector("#form")
let createButton = document.querySelector("#createButton");
createButton.addEventListener("click", show);
back.addEventListener("click", Back);
cancel.addEventListener("click", Cancel);

// ----------------------------------------------

function login(e) {
    e.preventDefault();
    axios.get(GET_LOGIN_REQUEST).then(response => {
        let data = response.data;
        let gender = document.getElementsByName("gender");
        let gen = "";
        for (let get of gender){
            if (get.checked){
                gen = get.value ;
            };
        };
        for (let user of data){
            if (username.value == user.user && password.value == user.password && gen == user.gender){
                let name = {user : username.value , password : password.value , gender : gen};
                localStorage.setItem("user",JSON.stringify(name));
                p.textContent = "Login succesful...";
                p.style.color = "green";
                setTimeout(function(){
                    window.location.href = "../chat/index.html";
                }, 3000);
            }else{
                p.textContent = "You don't have acount pleace create your account";
                p.style.color = "red";
            }
        }
    })
}
const p = document.querySelector("p")
const username = document.querySelector("#userName");
const password = document.querySelector("#password");
const loginButton = document.querySelector("#loginButton");
loginButton.addEventListener("click", login)