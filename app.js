const form = document.querySelector("form");
const fullName =document.getElementById("name")
const email =document.getElementById("name")
const phone =document.getElementById("name")
const subject =document.getElementById("name")
const mess =document.getElementById("name")






function sendemail() {
    
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "nimakh388@gmail.com",
    Password: "7ABCC8733397569AB79EE14E9530BC9AB8B1",
    To: "them@website.com",
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}


function chekInputs() {
    const items =document.querySelectorAll(".item");
    for(const item of items){
        if (item.value==""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
    }
}

form.addEventListener("submit" ,(e)=>{
    e.preventDefault()
    sendemail()
})