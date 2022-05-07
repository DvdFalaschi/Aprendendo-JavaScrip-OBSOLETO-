var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function increment(){
  if(currentNumber < 10){
    document.getElementById('erro').style.color = "transparent"
  currentNumber += 1
  currentNumberWrapper.innerHTML = currentNumber
  if(currentNumber < 0){
    document.getElementById('currentNumber').style.color = 'red'
  }else if(currentNumber > 0){
    document.getElementById('currentNumber').style.color = 'blue'
  }else{
    document.getElementById('currentNumber').style.color = 'black'
  }
  }else{
    document.getElementById('erro').style.color = "red"
  }
}

function decrement(){
  if(currentNumber > -10){
    document.getElementById('erro').style.color = "transparent"
  currentNumber -= 1
  currentNumberWrapper.innerHTML = currentNumber
  if(currentNumber < 0){
    document.getElementById('currentNumber').style.color = 'red'
  }else if(currentNumber > 0){
    document.getElementById('currentNumber').style.color = 'blue'
  }else{
    document.getElementById('currentNumber').style.color = 'black'
  }
  }else{
    document.getElementById('erro').style.color = "red"
  }
}

document.getElementById('adicionar').addEventListener("click", increment)
document.getElementById('subtrair').addEventListener("click", decrement)
 

