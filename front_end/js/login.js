
const IP = "192.168.88.18";
const PORT = 3000;
const GET_LOGIN_REQUEST = "http://" + IP + ":" + PORT + "/message";
// const GET_LOGIN_REQUEST = "https://skyface.herokuapp.com/message";

function create(){
    let user = {user : username.value , password : password.value ,text : []};
    axios.post(GET_LOGIN_REQUEST, user);
}

function login(e) {
    e.preventDefault();
    axios.get(GET_LOGIN_REQUEST).then(response => {
        let data = response.data;
        for (let user of data){
            if (username.value == user.user && password.value == user.password){
                let name = {user : username.value , password : password.value};
                localStorage.setItem("user",JSON.stringify(name));
                p.textContent = "Login succesful...";
                p.style.color = "green";
                window.location.href = "../chat/index.html";
            }else{
                p.textContent = "You don't have acount";
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