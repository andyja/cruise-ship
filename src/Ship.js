function Ship(name) {
    this.currentPort = name;
    this.setSail = function () {
        if (this.setSail) {
            this.currentPort = false;
        }
    }
 };
module.exports = Ship;