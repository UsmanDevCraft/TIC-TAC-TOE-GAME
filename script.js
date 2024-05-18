// <--------------- AUDIOS --------------- >
let audioClick = new Audio("audios/metal-clang-sound-81634.mp3")



// <--------------- CHANGE OF THE TURN SYMBOL --------------- >
var turns = "X";
let changeTurn = ()=>{
    return turns === "X"? "O" : "X" ;
};



// <--------------- WIN CODE --------------- >
let winFunc = () => {
  let boxtext= document.getElementsByClassName("boxtext");
  let winArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winArray.forEach((e)=>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")){
      document.querySelector(".result").innerText = boxtext[e[0]].innerText + " WON";
    };
  });

};



// <--------------- BOX FILL CODE --------------- >
let boxFilling = ()=>{
    let array = Array.from(document.getElementsByClassName('box'));
    array.forEach((element)=>{
      let boxtext = element.querySelector('.boxtext');
        element.addEventListener('click', ()=>{                           
            if(boxtext.innerText == ""){
              boxtext.innerText = turns;
              audioClick.play();
              turns = changeTurn();
              winFunc();
              document.getElementById('turn').innerText = turns;
            }
        });
    });
};
boxFilling();



// <--------------- RESET BUTTON CODE --------------- >
let resetFunc = () => {
  let resetButt = document.querySelector(".reset");
  resetButt.addEventListener("click", () => {
    let boxeText = Array.from(document.getElementsByClassName("boxtext"));
    boxeText.forEach((individual) => {
      individual.innerText = "";
      // turns = "X";            // FOR TURN X AT START ALWAYS
      turns = changeTurn();          // FOR EITHER OF THE TURNS AT START
      document.getElementById('turn').innerText = turns;
    });
  });
};
resetFunc();