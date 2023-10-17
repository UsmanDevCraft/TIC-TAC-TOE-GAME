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
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  // winArray.forEach((e) => {
  //   if ((boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[3]].innerText === boxtext[e[2]].innerText) && (boxtext[e[1]].innerText !== "")) {
  //     document.querySelector(".result").innerText = box[e[0]].innerText + "WON";
  //   }
  // });
};



// <--------------- BOX FILL CODE --------------- >
let boxFilling = ()=>{
    let array = Array.from(document.getElementsByClassName('box'));
    array.forEach((element)=>{
      let boxtext = element.querySelector('.boxtext');
        element.addEventListener('click', ()=>{                           
            // e.target.innerText = turns;                                  //
            // audioClick.play();                                            //   | this is used for  
            // // winFunc();                                                  //  |  target element    
            // turns = changeTurn();                                          //  | for each box      
            // document.getElementById('turn').innerText = turns;           //
            if(boxtext.innerText == ""){
              boxtext.innerText = turns;
              audioClick.play();
              turns = changeTurn();
              document.getElementById('turn').innerText = turns;
              winFunc();
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