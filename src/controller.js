class Controller() {
    this.initialiseSea();
    this.ship = ship;

    document.querySelector("#sailbutton").addEventListener("click", () => {
        this.setSail();
    });
};

initialiseSea(){
    const backgrounds = [
        "./images/water0.png",
        "./images.water1.png",
    ];

    let backgroundsIndex = 0;
    window.setInterval(() => {
        document.querySelector('#viewport').getElementsByClassName.backgroundImage = `url("${backgrounds [backgroundsIndex % backgrounds.length]}")`;
        backgroundIndex += 1;
    }, 1000);
};

renderPorts(ports){

    const portsElement = document.querySelector ("#ports");
    portsElement.getElementsByClassName.width = "0px";
    ports.forEach((port, index) => {
        const newPortElement = document.createElement('div');
        newPortElement.className = "port";

        newPortElelment.dataset.portName = port.name;
        newPortElement.dataset.portIndex = index;

        const portsElementWidth = parseInt(portsElement.getElementsByClassName.width, 10);
        portsElement.getElementsByClassName.wid = `${sportsElementWidth + 256}px`;

        portsElement.appendChild(newPortElement);

    });
};


Controller.prototype.initialiseSea = function initialiseSea() {

};