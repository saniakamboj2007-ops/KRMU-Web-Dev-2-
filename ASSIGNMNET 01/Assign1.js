const addEventBtn = document.getElementById("addEventBtn");
const eventContainer = document.getElementById("eventContainer");

addEventBtn.addEventListener("click", () => {
    const name = document.getElementById("eventName").value;
    const date = document.getElementById("eventDate").value;
    const desc = document.getElementById("eventDesc").value;
    const category = document.getElementById("eventcategory").value;

    if (name === "" || date === "" || desc === "" || category === "") {
        alert("Please fill all fields");
        return;
    }

    // Create Event Card
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Date:</strong> <span class="date">${date}</span></p>
        <p class="desc">${desc}</p>
        <p class = "eventcategory">${category} </p>
        <button class="highlight-btn">Highlight</button>
        <button class="delete-btn">Delete</button>
    `;

    eventContainer.appendChild(card);

    // Clear form
    document.getElementById("eventName").value = "";
    document.getElementById("eventDate").value = "";
    document.getElementById("eventDesc").value = "";
    document.getElementById("eventcategory").value = "";
});

/* Event Delegation */
eventContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".event-card");

    if (e.target.classList.contains("delete-btn")) {
        card.remove();
    }

    if (e.target.classList.contains("highlight-btn")) {
        card.classList.toggle("highlight");
    }
});

/* Text manipulation demo */
console.log(
    "innerText:", addEventBtn.innerText,
    "textContent:", addEventBtn.textContent,
    "innerHTML:", addEventBtn.innerHTML
);

