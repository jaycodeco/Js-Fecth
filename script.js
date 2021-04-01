var user;
var Fname = document.getElementById("Fname");
var Lname = document.getElementById("Lname");
var Img = document.getElementById("Img");
var Mail = document.getElementById("email");

fetch(`https://reqres.in/api/users/${Math.round(Math.random() * 11) + 1}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.data);
    user = data.data;
    Fname.innerHTML = user.first_name;
    Lname.innerHTML = user.last_name;
    Mail.innerHTML = user.email;
    Img.src = user.avatar;
  })
  .catch((error) => console.log(error));
