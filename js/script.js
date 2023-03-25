let timer = document.querySelector('.timer')
let score = document.querySelector('.score')
let ques = document.querySelector('.ques')
let box = document.querySelectorAll('.box')
let main = document.querySelector('.main')

let increment
var timerId
let num1 = 0
let num2 = 0
let plus
var sum 

timer.addEventListener('click' , () => {
    let seconds = 60 
    let result = 0
    console.log(result.textContent);
    let input
    let correct
    let wrong
    let resu
    main.addEventListener('click' , (e)=>{
         input = e.target.textContent
         if (input == plus) {
            console.log('yess!! you won')
            sum()
            function score(){
                // ques.textContent = `The Sum of ${num1} + ${num2} = ${plus}`            // user k input dena h underscore ki jgh
                
                result++
                Correct()
            }
            score()
            clearTimeout(set)
         } else {
            sum()
            function score(){
                // ques.textContent = `The Sum of ${num1} + ${num2} = ${plus}`            // user k input dena h underscore ki jgh
                result--
                Wrong()
            }
            score()
            clearTimeout(set)
         }
    })


    function sum() {
        num1 = Math.floor(Math.random() * 4) + 1;
        num2 = Math.floor(Math.random() * 5) + 1;
        plus = num1 + num2
        ques.textContent = `The Sum of ${num1} + ${num2} = __`            // user k input dena h underscore ki jgh
    }


function countDown() {
    if (seconds > 0) {
        seconds--;
        timer.textContent = `${seconds}`
        score.textContent = `Your Score is ${result}`
        let set = setTimeout(countDown, 1000);
    } 
    else if (seconds == 0){
    // alert(`         Game Over !!!
    //                 Your Score is ${result}
    //       `)
    //     timer.textContent = `Time's Up!!!!`
        showGameOver()
    }
    else  {
        showGameOver()
        // showGameOver()
        timer.textContent = `Time's Up!!!!`
        
  }
}


function showGameOver() {
    var gameOverContainer = document.getElementById("game-over-container");
    var gameOverBox = document.getElementById("game-over-box");
    var gamePlay = document.querySelector('.container')
    var final = document.querySelector('.final')
    // // var sc = document.querySelector('.sc')
    // gameOverContainer.classList.add('')
    final.textContent = `
                        Your score: ${result}
                        `
    gamePlay.classList.add('hide')
    gameOverContainer.style.display = "flex";
  }

function stopQues() {
        clearTimeout(setTimeout)
        sum()   
    }
    stopQues()

    function Correct() {
        var audio = document.getElementById("correct");
        audio.play();
    }
    
    function Wrong() {
        var audio = document.getElementById("wrong");
        audio.play();
      }

countDown();
})