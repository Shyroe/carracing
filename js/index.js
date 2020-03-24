// import Game from "./game.class.js";
import Game from "./game.class.js";

document.addEventListener("DOMContentLoaded", () => {
  // import Game from "./game.class.js";

  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");

  //Jogar btn
  document.querySelector(".jogador").addEventListener("submit", createPlayer);

  //create player
  function createPlayer(e) {
    e.preventDefault();

    //displayname
    let playername = document.querySelector(".playername").value;
    console.log("playername: ", playername);

    //
    if (playername == undefined || playername == "") {
      alert(
        "Você não é um jogador, apenas jogadores podem correr. Por favor, crie um jogador."
      );
      return;
    } else {
      const displayname = document.querySelector(".player-meter .displayname");
      displayname.innerHTML = playername;

      //hide home
      const home = document.querySelector(".player");
      // home.classList.toggle("close");
      home.classList.add("close");
    }
  }

  //import game class
  let game = new Game(context);

  requestAnimationFrame(gameLoop);

  function gameLoop() {
    game.update();

    requestAnimationFrame(gameLoop);
  }
});
