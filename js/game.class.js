import Road from "./road.class.js";
import PlayerCar from "./playerCar.class.js";
import CarController from "./carController.class.js";
import TrafficCar from "./trafficCar.class.js";
import { isCollide } from "./utillities.js";
import Scoreboard from "./scoreboard.class.js";

class Game {
  constructor(context) {
    this.context = context;
    this.road = new Road(this);
    this.playerCar = new PlayerCar(this);
    this.scoreboard = new Scoreboard(this);
    new CarController({
      road: this.road,
      playerCar: this.playerCar
    });

    // this.TrafficCar = new TrafficCar(this);
    this.traffic = [];

    //Chamar um carro, do array traffic, a cada 5segundos
    setInterval(() => this.populateTraffic(), 3000);

    //pause
    this._paused = false;
  }

  //Try Again
  tryAgain(e) {
    // spcacebar code = 32
    if (e.keyCode !== 32) {
      return;
    }

    //Reset game
    this.traffic = [];
    this.playerCar.resetPosition();
    this.playerCar.speed = 10;
    this._paused = false;
    let screenTryAgain = document.querySelector(".try-again");
    screenTryAgain.style.display = "none";
    document.onkeydown = null;

    //call homepage again
    const home = document.querySelector(".player");
    // home.classList.toggle("close");
    home.classList.remove("close");
  }

  populateTraffic() {
    //pause
    if (this._paused) return;

    let trafficCar = new TrafficCar(this);
    this.traffic.push(trafficCar);
  }

  update() {
    //pause
    if (this._paused) return;

    this.road.update();
    this.playerCar.update();
    this.scoreboard.update();
    //update cada um dos carros do array traffic
    this.traffic.forEach(car => {
      car.update();
    });

    //Colission detection
    if (isCollide(this.playerCar, this.traffic)) {
      // console.log("Collision detected...");
      this._paused = true;

      let screenTryAgain = document.querySelector(".try-again");
      screenTryAgain.style.display = "block";

      //try again function
      document.onkeydown = e => this.tryAgain(e);
    }
  }
}

export default Game;
