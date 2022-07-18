function Ship() {
    this.startingPort = 'Dover'
}

Ship.prototype.setSail = function () {
    this.startingPort = null
};

module.exports = Ship;