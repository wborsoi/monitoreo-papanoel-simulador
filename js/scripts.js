
function inicializar(params) {
    let camara1 = document.getElementById("video-1");
    let camara2 = document.getElementById("video-2");
    let camara3 = document.getElementById("video-3");
    let camara4 = document.getElementById("video-4");


    camara1.addEventListener("load", () => { changeVideo1() });
    camara1.addEventListener("ended", () => { changeVideo1() });

    camara2.addEventListener("load", () => { changeVideo2() });
    camara2.addEventListener("ended", () => { changeVideo2() });
    
    camara3.addEventListener("load", () => { changeVideo3() });
    camara3.addEventListener("ended", () => { changeVideo3() });
    
    camara4.addEventListener("load", () => { changeVideo4() });
    camara4.addEventListener("ended", () => { changeVideo4() });

}

function changeVideo4() {
    let camera = document.getElementById("4");
    console.log("Camera", camera);

    camera.innerHTML = `<div class="camera-overlay">
    <h3>Camara 4</h3>
    <div class="boton-rojo Blink"></div>
    </div>
    <img class="img-nosignal" src="assets/no-signal.gif" alt="nosignal">`;

    let tiempo = getRandomNumber();
    console.log("entre")
    setTimeout(()=> {
        camera.innerHTML = `<div class="camera-overlay">
        <h3>Camara 4</h3>
        <div class="boton-rojo Blink"></div>
    </div>
    <video id="video-4" autoplay muted>
        <source src="assets/camara3.mp4" type="video/mp4">
        No funciona la reproduccion en este navegador. Por favor cambie a otro.
    </video>`
    let camara4 = document.getElementById("video-4");
    camara4.addEventListener("load", () => { changeVideo4() });
    camara4.addEventListener("ended", () => { changeVideo4() });
    }, tiempo);

}

function changeVideo1() {
    let camera = document.getElementById("1");

    camera.innerHTML = `<div class="camera-overlay">
    <h3>Camara 1</h3>
    <div class="boton-rojo Blink"></div>
    </div>
    <img class="img-nosignal" src="assets/no-signal.gif" alt="nosignal">`;

    let tiempo = getRandomNumber();
    setTimeout(()=> {
        camera.innerHTML = `<div class="camera-overlay">
        <h3>Camara 1</h3>
        <div class="boton-rojo Blink"></div>
    </div>
    <video id="video-1" class="video-position" autoplay muted>
        <source src="assets/camara1.mp4" type="video/mp4">
        No funciona la reproduccion en este navegador. Por favor cambie a otro.
    </video>`
    let camara1 = document.getElementById("video-1");
    camara1.addEventListener("load", () => { changeVideo1() });
    camara1.addEventListener("ended", () => { changeVideo1() });

    }, tiempo);

}

function changeVideo2() {
    let camera = document.getElementById("2");

    camera.innerHTML = `<div class="camera-overlay">
    <h3>Camara 2</h3>
    <div class="boton-rojo Blink"></div>
    </div>
    <img class="img-nosignal" src="assets/no-signal.gif" alt="nosignal">`;

    let tiempo = getRandomNumber();
    setTimeout(()=> {
        camera.innerHTML = `<div class="camera-overlay">
        <h3>Camara 2</h3>
        <div class="boton-rojo Blink"></div>
    </div>
    <video id="video-2" class="video-position" autoplay muted>
        <source src="assets/camara2.mp4" type="video/mp4">
        No funciona la reproduccion en este navegador. Por favor cambie a otro.
    </video>`
    let camara2 = document.getElementById("video-2");
    camara2.addEventListener("load", () => { changeVideo2() });
    camara2.addEventListener("ended", () => { changeVideo2() });
    
    }, tiempo);

}

function changeVideo3() {
    let camera = document.getElementById("3");

    camera.innerHTML = `<div class="camera-overlay">
    <h3>Camara 3</h3>
    <div class="boton-rojo Blink"></div>
    </div>
    <img class="img-nosignal" src="assets/no-signal.gif" alt="nosignal">`;

    let tiempo = getRandomNumber();
    setTimeout(()=> {
        camera.innerHTML = `<div class="camera-overlay">
        <h3>Camara 3</h3>
        <div class="boton-rojo Blink"></div>
    </div>
    <video id="video-3" class="video-position" autoplay muted>
        <source src="assets/camara3.mp4" type="video/mp4">
        No funciona la reproduccion en este navegador. Por favor cambie a otro.
    </video>`
    let camara3 = document.getElementById("video-3");
    camara3.addEventListener("load", () => { changeVideo3() });
    camara3.addEventListener("ended", () => { changeVideo3() });
    
    }, tiempo);

}

function getRandomNumber(params) {
    const min = 2 * 1000;
    const max = 5 * 1000;
    return Math.floor(Math.random() * (max - min + 1) + min)
}