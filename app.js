const form = document.querySelector("form")
fullName = document.getElementById("name")
email = document.getElementById("email")
phone = document.getElementById("phone")
subject = document.getElementById("subject")
message = document.getElementById("message")

function sendEmail() {
const bodyMessage = `Full Name :${fullName.value}<br> Email${email.value}<br> phone Number: ${phone.value}<br> Message:${message.value})`


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ladi2252.nn@gmail.com",
        Password : "",
        To : 'ladi2252.nn@gmail.com',
        From : "ladi2252.nn@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message==="OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}


function checkInputs() {
    const items = document.querySelectorAll(".item")

    for (const item of items){
        if(item.value ==""){
            item.classList.add("error")
            item.parentElement.classList.add("error")
        }
        item.addEventListener("keyup", ()=>{
            if (item.value !=""){
                item.classList.remove("error")
                item.parentElement.classList.remove("error")
            }
            else {
                item.classList.add("error")
                item.parentElement.classList.add("error")
            }
        })
    }
    
}



form.addEventListener("submit", (e)=>{
    e.preventDefault();
    checkInputs();
    sendEmail();
})