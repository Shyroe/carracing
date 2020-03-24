export default class Scoreboard {
  constructor(game) {
    this.game = game;
    this.timeMeter = document.querySelector(".time-meter .time");
    this.distanceMeter = document.querySelector(".distance");
    // this.startTime = Date.now();
    this.startTime = this.then = Date.now(); //receber tempo de forma asyncrona com promise
    this.distanceTraveled = 0;
  }

  update() {
    this.updateTime();
    this.updateKMLeft();
  }

  updateTime() {
    let timeElapsed = Date.now() - this.startTime;

    let time = new Date(timeElapsed);

    let hours =
      time.getUTCHours() < 10 ? "0" + time.getUTCHours() : time.getUTCHours();
    let minutes =
      time.getUTCMinutes() < 10
        ? "0" + time.getUTCMinutes()
        : time.getUTCMinutes();
    let seconds =
      time.getUTCSeconds() < 10
        ? "0" + time.getUTCSeconds()
        : time.getUTCSeconds();
    let miliseconds = time.getUTCMilliseconds();
    let mili = Math.floor(miliseconds / 100);
    mili = mili < 10 ? "0" + mili : mili;

    // this.timeMeter.innerHTML = this.timeElapsed;
    this.timeMeter.innerHTML = `${hours}:${minutes}:${seconds}:${mili}`;
  }

  updateKMLeft() {
    let now = Date.now();
    let deltaTime = now - this.then;

    if (deltaTime >= 1000) {
      let metersPerSecond = (this.game.playerCar.speed * 1000) / (60 * 60);

      this.distanceTraveled += metersPerSecond;
      this.then = now;

      this.distanceMeter.innerHTML =
        10 - (this.distanceTraveled / 1000).toFixed(1) + " KMs"; //divide por 1000 para calcular em KM
    }
  }
}
