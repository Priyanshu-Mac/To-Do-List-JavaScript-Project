const inputBox = document.querySelector("#input_box");
const btn = document.querySelector(".row button");
const listContainer = document.querySelector("#list_container");

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

const addTask = () => {
    if (inputBox.value === "") {
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerText = inputBox.value;

        let icon = document.createElement("i");
        icon.className = "fa-regular fa-circle";
        li.prepend(icon);

        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerText = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();

}

btn.addEventListener("click", () => {
    addTask();
});

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

        let icon = e.target.querySelector("i");
        if (e.target.classList.contains("checked")) {
            icon.className = "fa-regular fa-circle-check"; // Checked icon
        } else {
            icon.className = "fa-regular fa-circle"; // Unchecked icon
        }
        saveData();
    }
    else if (e.target.tagName === "I") {
        // Allow clicking directly on the icon
        e.target.parentElement.classList.toggle("checked");
        e.target.className = e.target.parentElement.classList.contains("checked")
            ? "fa-regular fa-circle-check"
            : "fa-regular fa-circle";
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

}, false);

showData();
