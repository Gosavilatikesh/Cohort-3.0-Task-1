const form = document.querySelector("form");
const nameInp = document.querySelector("#name");
const emailInp = document.querySelector("#email");
const user = document.querySelector(".user");
const url = document.querySelector("#url");


let usersData = [
     {
    id: 1,
    name: "John Doe",
    email: "john.doe@gmail.com",
    dob: "1998-05-12",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Emma Wilson",
    email: "emma.wilson@gmail.com",
    dob: "1995-11-24",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@gmail.com",
    dob: "2000-03-18",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: 4,
    name: "Sophia Taylor",
    email: "sophia.taylor@gmail.com",
    dob: "1997-08-07",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    id: 5,
    name: "David Johnson",
    email: "david.johnson@gmail.com",
    dob: "1999-01-30",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  }
];

const ui = () =>{
    user.innerHTML = "";
    usersData.forEach( (elem ,index) => {
    user.innerHTML += `
        <div class="user_card">
          <img src="${elem.image}" alt="user" />
          <h3>${elem.name}</h3>
          <p>${elem.email}</p>
          <div class="actions">
            <button class="edit-btn">Edit</button>
            <button onclick="deleteCard(${index})" class="delete-btn">Delete</button>
          </div>
        </div>
        
    `;
});
};

ui();


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInp.value;
    const email = emailInp.value;
    const image = url.value

    if(name.trim() === "" && email.trim() === "" && image.trim() === "") return;

    usersData.push({
        name,
        email,
        image,
    })

    ui();

    form.reset();
});

let deleteCard = (index) =>{
    usersData.splice(index, 1);
    ui();
}