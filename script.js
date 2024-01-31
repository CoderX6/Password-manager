let form = document.querySelector("form");
form.addEventListener("submit",(val)=>{
    val.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let site = document.getElementById("site").value;

    let add_card = `
    <div class="card border">
    <div class="website border center">
        ${site}
    </div>
    <div class="username border center">
        ${username}
    </div>
    <div class="password border center">
        ${password}
    </div>
    `

    if(username != "" && site != "" && password != ""){
    document.querySelector(".display").innerHTML = document.querySelector(".display").innerHTML+add_card
    }
})