// const IP = "192.168.56.1";
// const PORT = 3000;
// const GET_LOGIN_REQUEST = "http://" + IP + ":" + PORT + "/login";


// // function user login 
// function login(e) {
//     e.preventDefault();
//     // 1- Create the REQUEST 
//     axios.get(GET_LOGIN_REQUEST).then(response => {
//         let users = response.data;
//         let text = "not vlaid";
//         let color = "red";

//         for (let user of users) {
//             if (userName.value == user.name && password.value == user.password) {
//                 text = "Login success!";
//                 color = "green";
//             }
//         }
//         message.textContent = text;
//         message.style.color = color;
//         let body = document.querySelector(".body");
//         body.style.display = "none";
//     });
// }

// // function create user
// function createUser(e) {
//     e.preventDefault();
//     let user = {
//         name: userName.value,
//         password: password.value
//     };
//     axios.post(GET_LOGIN_REQUEST, user);
// }

// const message = document.querySelector("#message");
// const userName = document.querySelector("#userName");
// const password = document.querySelector("#password");

// const createButton = document.querySelector("#createButton");
// createButton.addEventListener("click", createUser)

// const loginButton = document.querySelector("#loginButton");
// loginButton.addEventListener("click", login)