const form = document.querySelector("form");
fullName = document.getElementById("name");
email = document.getElementById("email");
phone = document.getElementById("phone");
subject = document.getElementById("subject");
mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name:${fullname.value}<br> Email:${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "nimakh388@gmail.com",
    Password: "7ABCC8733397569AB79EE14E9530BC9AB8B1",
    To: "nimakh388@gmail.com",
    From: "nimakh388@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => alert(message));
}

function chekInputs() {
  const items = document.querySelectorAll(".item");
  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendemail();
});
