class Ship(port, name, weight) {
    this.port = port;
    this.name = name;
    this.weight = weight;
    this.setSail = function () {
        if (this.setSail) {
            this.currentPort = false;
        }
    }
    this.dock = function (port) {
        this.currentPort = port;
    }
 };
module.exports = Ship;