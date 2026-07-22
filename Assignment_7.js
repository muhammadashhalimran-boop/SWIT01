// Retrieve existing data from localStorage

let users = JSON.parse(localStorage.getItem("users")) || [];

// Collect user information using prompt()

let fullName = prompt("Enter your Full Name:");
let age = prompt("Enter your Age:");
let city = prompt("Enter your City:");
let profession = prompt("Enter your Profession:");
let email = prompt("Enter your Email:");
let phone = prompt("Enter your Phone Number");

// Create object

let user = {
    fullName: fullName,
    age: age,
    city: city,
    profession: profession,
    email: email,
    phone: phone
};

// Store object inside array

users.push(user);

// Save array into localStorage

localStorage.setItem("users", JSON.stringify(users));

// Get div from HTML

let userDiv = document.getElementById("userData");

// Display all users

users.forEach(function(item, index){

    userDiv.innerHTML += `

    <div class="card">

        <h2>User ${index + 1}</h2>

        <p><span class="label">Full Name:</span> ${item.fullName}</p>

        <p><span class="label">Age:</span> ${item.age}</p>

        <p><span class="label">City:</span> ${item.city}</p>

        <p><span class="label">Profession:</span> ${item.profession}</p>

        <p><span class="label">Email:</span> ${item.email}</p>

        <p><span class="label">Phone:</span> ${item.phone}</p>

    </div>

    `;

});