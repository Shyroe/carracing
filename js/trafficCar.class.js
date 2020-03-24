export default class TrafficCar {
  constructor(game) {
    this.game = game;
    this.context = this.game.context;
    this.car = new Image();
    this.car.src = "./images/enemyCars/car-spritesheet.png";
    this.carNo = Math.round(Math.random() * 4);
    this.speed = Math.random() * 7 + 3; //generate speed between 3 to 10
    this._positionY = Math.random() * 500 * -1;
    //Posição Horizontal de cada pista da imagem. Pista esquerda = 150; pista do meio = 225; pista direita = 300
    this.lanePosX = [150, 225, 300, 150];

    //prop para acessar o array this.lanePosX
    this.lane = Math.floor(Math.random() * 3);
  }

  //get positionX
  get positionX() {
    return this.lanePosX[this.lane];
  }

  //get positionY
  get positionY() {
    return this._positionY;
  }

  update() {
    // O spritesheet tem 384px de largura. Tem 5 carros no total
    // 76px a largura de cada carro e 128px de altura

    //Desenhar carro no mesmo lugar
    // this.context.drawImage(
    //   this.car,
    //   this.carNo * 76,
    //   0,
    //   76,
    //   128,
    //   150,
    //   500,
    //   76,
    //   128
    // );

    //Modificar a posição Vertical do carro
    // this.positionY += this.speed;
    this._positionY += this.game.playerCar.speed / 5 + this.speed;

    //Desenhar carro em posições diferentes da pista.
    this.context.drawImage(
      this.car,
      this.carNo * 76,
      0,
      76,
      128,
      this.lanePosX[this.lane],
      this._positionY,
      76,
      128
    );

    //Remover carro de tráfego quando ele chegar a menos de 700px do eixo Y
    if (this._positionY >= 828) {
      this.game.traffic.splice(this.game.traffic.indexOf(this), 1);
    }
  }
}
