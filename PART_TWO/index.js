let loginButton = document.getElementById("admin");
let container = document.getElementById("container");
let main = document.getElementById("main");
let loginmenu = document.getElementById("loginmenu");
let login = document.getElementById("login");
let nameS = document.getElementById("name");
let password = document.getElementById("password");
let menuSystem = document.getElementById("menuSystem");
let add = document.getElementById("add");
let addname = document.getElementById("addname");
let addprice = document.getElementById("addprice");
let display = document.getElementById("display");
let removeDisplay = document.querySelector(".remove__display");
let logout = document.getElementById("logout");
let onscreenFood = [
  {
    food: "Goat meat Soup",
    price: "N 6000",
    id: 1,
  },
  {
    food: "Tasty soup",
    price: "N 3000",
    id: 2,
  },
  {
    food: "Rice and salad",
    price: "N 3000",
    id: 3,
  },
];
let displayedFood = [
  {
    food: "Rice",
    price: "N 3000",
    id: 4,
  },
  {
    food: "Noodles",
    price: "N 3000",
    id: 5,
  },
];
let Admin = [
  {
    Name: "Alex",
    password: 12345,
  },
];

function Login() {
  if (Admin[0].Name == nameS.value && Admin[0].password == password.value) {
    loginmenu.classList.add("hide");
    password.value = "";
    nameS.value = "";
    menuSystem.classList.remove("hide");
    container.classList.add("hide");
  } else {
    alert("Invalid username or password");
  }
}
function addFood() {
  if (addname.value == "" || addprice.value == "") {
    alert("Please fill in all fields");
  } else {
    let food = addname.value;
    let price = addprice.value;
    let newFood = {
      food: food,
      price: `N ${price}`,
      id: `${food + price}`,
    };
    addname.value = "";
    addprice.value = "";
    displayedFood.push(newFood);
    displayFood();
  }
}
function onScreenFood() {
  container.innerHTML = "";
  onscreenFood.forEach((food) => {
    let foodDiv = document.createElement("div");
    foodDiv.classList.add("container");
    foodDiv.innerHTML = `
            <div class="food__card">
                <h1>${food.food}</h1>
                <p class="content" id=${food.id}>price: ${food.price} </p>
            </div>
    `;
    container.appendChild(foodDiv);
  });
}
function removefoods() {
  removeDisplay.innerHTML = "";
  onscreenFood.forEach((food) => {
    let foodDiv = document.createElement("div");
    foodDiv.classList.add("foodNames");
    foodDiv.innerHTML = `
            <div class="foods">
                    <h2 class="name-food">${food.food}</h2>
                    <p class="food__price">${food.price}
                    </p>
                    <i class="fa-solid fa-xmark fa" id=${food.id}></i>
                </div>
    `;
    removeDisplay.appendChild(foodDiv);
  });
  let foods = document.querySelectorAll(".fa");
  foods.forEach((food) => {
    food.addEventListener("click", () => {
      removeFood(food.getAttribute("id"));
    });
  });
  onScreenFood();
}
function displayFood() {
  display.innerHTML = "";
  displayedFood.forEach((food) => {
    let foodDiv = document.createElement("div");
    foodDiv.classList.add("foodDisplays");
    foodDiv.innerHTML = `
             <div class="foods-display">
                        <h2 class="name-display">${food.food}</h2>
                        <p class="food__price">${food.price}
                        </p>
                        <i class="fa-solid fa-bolt fas" id="${food.id}"></i>
                    </div>
                    
    `;
    display.appendChild(foodDiv);
  });
  let foods = document.querySelectorAll(".fas");
  foods.forEach((food) => {
    food.addEventListener("click", () => {
      addOnscreen(food.getAttribute("id"));
    });
  });
}
function addOnscreen(id) {
  let newFood = displayedFood.filter((food) => {
    return food.id == id;
  });
  const index = displayedFood.findIndex((object) => {
    return id == object.id;
  });
  displayedFood.splice(index, 1);
  onscreenFood.push(newFood[0]);
  onScreenFood();
  removefoods();
  displayFood();
}
function removeFood(id) {
  const index = onscreenFood.findIndex((object) => {
    return id == object.id;
  });
  onscreenFood.splice(index, 1);
  onScreenFood();
  removefoods();
}
function logouts() {
  menuSystem.classList.add("hide");
  container.classList.remove("hide");
}
logout.addEventListener("click", (e)=>{
  e.preventDefault();
  logouts();
});
loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  loginmenu.classList.toggle("hide");
});
login.addEventListener("click", (e) => {
  e.preventDefault();
  Login();
});
add.addEventListener("click", (e) => {
  e.preventDefault();
  addFood();
});
removefoods();

displayFood();
onScreenFood();
