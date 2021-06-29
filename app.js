let displayTime = document.querySelector(".todo-section h1");
let bgImage = document.querySelector(".hero-section");
let displayDay = document.querySelector(".todo-section h3");
let addButton = document.querySelector(".todo-button");
let inputField = document.getElementById("inputField");
let todoContainer = document.querySelector(".todo-list-container")

// Addingand Deleting Tasks
addButton.addEventListener("click", () => {
    
    // ADD
    let todo = document.createElement("li");
    todo.innerText = inputField.value;
    todoContainer.appendChild(todo);
    // Line-Through
    todo.addEventListener("click", () => {
        todo.style.textDecoration = "line-through";
    })
    //Delete
    todo.addEventListener("dblclick", () => {
        todoContainer.removeChild(todo);
    })

    // clear input field
    inputField.value = "";
})

// Displaying Time and Day
const clock = () => {
    let time = new Date();
    let hours = checkTime(time.getHours());
    let minutes = checkTime(time.getMinutes());
    let seconds = checkTime(time.getSeconds());

    let arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let weekdayNumber = time.getDay()
    let weekdayName = arrayOfWeekdays[weekdayNumber]

    displayDay.innerText = weekdayName;
    let currentTime = hours >= 12 ? `${hours} : ${minutes} : ${seconds} PM` : `${hours} : ${minutes} : ${seconds} AM`;
    displayTime.innerText = currentTime;

    if (hours >= 04 && hours <= 06) {
        bgImage.style.backgroundImage = "url('./images/sunrise.jpg')";
    }
    else if (hours >= 07 && hours <= 15) {
        bgImage.style.backgroundImage = "url('./images/morning.jpg')";
    }
    else if (hours >= 16 && hours <= 18) {
        bgImage.style.backgroundImage = "url('./images/sunset.jpg')";
    }
    else {
        bgImage.style.backgroundImage = "url('./images/night.jpg')";
    }
}

const checkTime = (t) => {
    return (t < 10 ? `0${t}` : t);
}


setInterval(clock, 1000);