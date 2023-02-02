function Ship(name) {
    this.currentPort = name;
    this.setSail = function () {
        if (this.setSail) {
            this.currentPort = false;
        }
    }
    this.dock = function () {
        this.currentPort = port;
    }
 };
module.exports = Ship;