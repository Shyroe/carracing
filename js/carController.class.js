export default class CarController {
  constructor(options) {
    this.road = options.road;
    this.playerCar = options.playerCar;

    this.init();
  }

  init() {
    document.addEventListener("keydown", e => {
      console.log(e.keyCode);
      switch (e.keyCode) {
        case 37: // move the car to the left
          this.playerCar.moveLeft();
          break;
        case 38: // up to increase the car speed
          this.playerCar.speed += 1;
          break;
        case 39: // move the car to the right
          this.playerCar.moveRight();
          break;
        case 40: // down to decrease the car speed
          this.playerCar.speed -= 5;
          break;
        default:
          break;
      }
    });
  }
}
