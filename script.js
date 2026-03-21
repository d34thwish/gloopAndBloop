const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const edgeMargin = 50;
const cameraSpeed = 5;

const player = {
    x:50,
    y:50,
    size:30,
    speed:3
};

const player2 = {
    x:70,
    y:70,
    size:30,
    speed:3
};

const keys = {};

const camera = {
    x:0,
    y:0
};

const mouse = {
    x:0,
    y:0
};

canvas.addEventListener("mousemove", (e) =>{
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
})



window.addEventListener("keydown", (e) => {
    keys[e.key.toLowerCase()] = true;
});

window.addEventListener("keyup", (e) => {
    keys[e.key.toLowerCase()] = false;
});

//adaptative camera

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", () =>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});



function gameLoop() {

    //camera

    if (mouse.x < edgeMargin) camera.x -= cameraSpeed;
    if (mouse.x > canvas.width - edgeMargin) camera.x += cameraSpeed;
    if (mouse.y < edgeMargin) camera.y -= cameraSpeed;
    if (mouse.y > canvas.height - edgeMargin) camera.y += cameraSpeed;



    
    //player 1
    if (keys["w"]) player.y -= player.speed;
    if (keys["s"]) player.y += player.speed;
    if (keys["d"]) player.x += player.speed;
    if (keys["a"]) player.x -= player.speed;



    //player 2
    if (keys["arrowup"]) player2.y -= player2.speed;
    if (keys["arrowdown"]) player2.y += player2.speed;
    if (keys["arrowright"]) player2.x += player2.speed;
    if (keys["arrowleft"]) player2.x -= player2.speed;




    //ALWAYS IN THE END
    ctx.fillStyle = "#b5e7a0"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "blue"
    ctx.fillRect(player.x - camera.x, player.y - camera.y, player.size, player.size)
    ctx.fillStyle = "red"
    ctx.fillRect(player2.x - camera.x, player2.y - camera.y, player2.size, player2.size)
    requestAnimationFrame(gameLoop);
}

gameLoop();