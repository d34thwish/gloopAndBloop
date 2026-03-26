const WebSocket = require("ws");

const wss = new WebSocket.Server({port: 8080});

console.log("Server running");

wss.on("connection", (ws) => {
    console.log("Someone connected");
    ws.on("close", (ws) => {
        console.log("Someone disconnected");
    });
});