const eventList = document.getElementById("eventList");

function addEvent() {
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    if (!title || !date) {
        alert("Please enter title and date");
        return;
    }

    removeEmptyText();

    const div = document.createElement("div");
    div.className = "event";

    div.innerHTML = `
        <h4>${title}</h4>
        <p><b>Date:</b> ${date}</p>
        <p><b>Category:</b> ${category}</p>
        <p>${description}</p>
    `;

    eventList.appendChild(div);

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
}

function clearEvents() {
    eventList.innerHTML = `<p class="empty">No events yet. Add your first event!</p>`;
}

function addSampleEvents() {
    clearEvents();
    const samples = [
        ["Tech Meeting", "2026-02-10", "Meeting", "AI & Web Technologies"],
        ["Hackathon", "2026-04-01", "Workshop", "24-hour coding challenge"],
        ["College Fest", "2026-05-20", "Fest", "Cultural & technical fest"]
    ];

    samples.forEach(e => {
        const div = document.createElement("div");
        div.className = "event";
        div.innerHTML = `
            <h4>${e[0]}</h4>
            <p><b>Date:</b> ${e[1]}</p>
            <p><b>Category:</b> ${e[2]}</p>
            <p>${e[3]}</p>
        `;
        eventList.appendChild(div);
    });
}

function removeEmptyText() {
    const empty = document.querySelector(".empty");
    if (empty) empty.remove();
}
