const WebSocket = require("ws");

const wss = new WebSocket.Server({port: 8080});

let id = 0;

console.log("Server running");

wss.on("connection", (ws) => {
    ws.id = id++;
    console.log(`User ${ws.id} connected`);

    ws.on("close", () => {
        console.log(`User ${ws.id} disconnected`);
    });
});