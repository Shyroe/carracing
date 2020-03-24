class PlayerCar {
  constructor(game) {
    this.game = game;
    this.context = game.context;
    this._positionX = 225;
    this._positionY = 650;
    this._speed = 10;
    this.maxSpeed = 120;
    this.playerCar = new Image();
    this.playerCar.src = "./images/playerCar/hero.png";
  }

  //get positionX
  get positionX() {
    return this._positionX;
  }

  //get positionY
  get positionY() {
    return this._positionY;
  }

  //reset position
  resetPosition() {
    this._positionX = 225;
    this._positionY = 650;
  }

  moveLeft() {
    this._positionX -= 5;
    if (this._positionX <= 150) this._positionX = 150;
  }

  moveRight() {
    this._positionX += 5;
    if (this._positionX >= 300) this._positionX = 300;
  }

  set speed(speed) {
    if (speed >= this.maxSpeed) {
      this._speed = this.maxSpeed;
    } else if (speed <= 0) {
      this._speed = 0;
    } else {
      this._speed = speed;
    }

    //speedo meter
    document.querySelector(".speedo-meter .speed").innerHTML = this._speed;
  }

  get speed() {
    return this._speed;
  }

  update() {
    this.context.drawImage(this.playerCar, this._positionX, this._positionY);
  }
}

export default PlayerCar;
