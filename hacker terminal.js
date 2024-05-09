const msgs = [
    "initializing hacking",
    "Important files detected",
    "sending files to server",
    "detecting password",
    "password detected",
    "ip:1156.848.93",
    "PortName:647:92",
    "location:Uranus",
    "Downloading files",
    "download complete",
    "device will blast in 5 seconds",
    "5",
    "4",
    "3",
    "2",
    "1",
    "Boom!💀"
];

function addMessage(i) {
    if (i >= msgs.length) return; // Exit condition when all messages are added
    
    let rand = Math.random() * 3000;
    setTimeout(() => {
        console.log(i);
        let element = document.createElement("div");
        element.innerHTML = `>>> ${msgs[i]}`;
        element.setAttribute("class", "space");
        document.body.querySelector(".terminal").append(element);
        addMessage(i + 1); // Call the function recursively for the next iteration
    }, rand);
}

// Start the loop
addMessage(0);



