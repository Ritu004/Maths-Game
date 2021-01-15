var play = false;
var score = 0; 
var action;
var timeremain;
var stopcountdown;
var Correct;
//if we click on start or reset game button
  document.getElementById("reset").onclick = function() {
      //if game is alredy in playing mode
    if(play == true){
        location.reload();
    }
      //if game is not in playing mode
    else {
        //set game is equal to playing mode
        play = true;
        //setting the score 
        document.getElementById("scvalue").innerHTML = score;
        //Show the remaining time
        show("time");
        //change the start button to reset button
        document.getElementById("reset").innerHTML = "Reset Game";
        //start countdown
        timeremain = 30;
        document.getElementById("sec").innerHTML = timeremain;
        startcoundown();
        hide("gameover");
        //generate new qus & ans
        generateQA();
        
    }
}
  //clicking ans box
  for(i=1; i<5; i++){
      document.getElementById("box"+i).onclick = function(){
      if(play == true){
          if(this.innerHTML == correctAns){
              score +=1;
              document.getElementById("scvalue").innerHTML = score;
             
              hide("wrong");
               show("correct");
              setTimeout(function(){ hide("correct") },1000);
              generateQA();
             }
          else{
              
              hide("correct");
              show("wrong");
              setTimeout(function(){ hide("wrong") },1000);
          }
      }
  }
  }
  //start countdown
  function startcoundown(){
      action = setInterval(function(){
      timeremain -= 1;
      document.getElementById("sec").innerHTML = timeremain;
          if(timeremain == 0){
              stopcountdown();
              show("gameover");
              document.getElementById("gameover").innerHTML = "<p>Game Over!</p><p>Your Score is "+ score +"</p>";
              hide("time");  
              hide("correct");
              hide("wrong");
              play = false;
              score = 0;
              document.getElementById("reset").innerHTML = "Start Game";
          }

      },1000)
  }
//stop countdown
 function stopcountdown(){
                   clearInterval(action);    

 }
//hide element
function hide(ID){
    document.getElementById(ID).style.display = "none";
}
//show element
function show(ID){
    document.getElementById(ID).style.display = "block";
}
//function for generate Qus Ans
function generateQA(){
    var x = 1+ Math.round(9*Math.random());
    var y = 1+ Math.round(9*Math.random());
    correctAns = x*y;
    document.getElementById("qus").innerHTML = x +"*"+ y;
    var position =  1+ Math.round(3*Math.random());
    document.getElementById("box"+position).innerHTML = correctAns;
    
    var answers = [correctAns];
    for(i=1; i<5; i++){
        if(i != position){
            var wrongans;
            do{
                
                  var wrongans = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random()));

                  
              }while(answers.indexOf(wrongans)>-1)
            document.getElementById("box"+i).innerHTML = wrongans;
            answers.push(wrongans);
            
        }
        
    }
    
}