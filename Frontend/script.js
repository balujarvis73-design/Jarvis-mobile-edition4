
document.addEventListener("DOMContentLoaded", function () {

    const chat = document.getElementById("chat");
    const input = document.getElementById("msg");
    const send = document.getElementById("send");

    function addMessage(message, who) {
        const div = document.createElement("div");
        div.className = "msg " + who;
        div.textContent = message;
        chat.appendChild(div);
        chat.scrollTop = chat.scrollHeight;
    }

    function sendMessage() {
        const message = input.value.trim();

        if (message === "") {
            alert("Please type a message!");
            return;
        }

        addMessage("YOU: " + message, "user");
        input.value = "";

        addMessage("J.A.R.V.I.S: Processing...", "ai");

        setTimeout(function () {
            const messages = chat.querySelectorAll(".ai");
            messages[messages.length - 1].textContent =
                "J.A.R.V.I.S: Systems online. How may I assist you, Boss?";
        }, 1000);
    }

    send.addEventListener("click", sendMessage);

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

});

