(function exportShip() {
    class Ship { 
      constructor(itinerary) {
        this.itinerary = itinerary;
        this.currentPortIndex = 0; // initialize currentPortIndex to zero
        this.currentPort = itinerary.ports[0];
        this.previousPort = null;
        this.currentPort.addShip(this);
      }
      
      setSail() {
        if (this.itinerary.ports.length === 0) {
          throw new Error("There are no ports in the itinerary.");
        }
        
        if (this.currentPortIndex === this.itinerary.ports.length - 1) {
          throw new Error("This is the last port in the itinerary.");
        }
        
        this.currentPort.removeShip(this);
        this.currentPortIndex++;
        this.currentPort = this.itinerary.ports[this.currentPortIndex];
        this.currentPort.addShip(this);
      }
        
      dock() {
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
        this.currentPort = itinerary.ports[previousPortIndex + 1];
        this.currentPort.addShip(this);
      }
    }
  
    if(typeof module !== 'undefined' && module.exports){
      module.exports = Ship;
    } else {
      window.Ship = Ship;
    }
  })();
  