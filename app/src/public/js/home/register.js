"use strict"

const id = document.querySelector("#id"),
    name_ = document.querySelector("#name"),
    rank = document.querySelector("#rank"),
    password = document.querySelector("#password"),
    confirmPassword = document.querySelector("#confirm-password "),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    const req = {
        id: id.value,
        name: name_.value,
        rank: rank.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    };
    console.log(req);
    // fetch("/register", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(req),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if(res.success) {
    //         location.href = "/";
    //     }else {
    //         alert(res.msg);
    //     }
    //   })
    //   .catch((err) => {
    //     console.error("로그인 중 에러 발생");
    //   });
}
