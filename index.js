var katzDeliLine=[]

function takeANumber(currentLine, newCustomer) {
  currentLine.push(newCustomer);
  var position = currentLine.length;
  return (`Welcome, ${newCustomer}. You are number ${position} in line.`)
}

function nowServing(katzDeliLine){
  if(katzDeliLine<0){
    return "There is nobody waiting to be served!"
  }else{
   var nextInLine=katzDeliLine[0]
   katzDeliLine.shift()
   return `Currently serving ${nextInLine}.`
  }
}

function currentLine(katzDeliline) {
  if (katzDeliline.length === 0) {
   return 'The line is currently empty.'
  } else if (katzDeliline.length > 0) {
    var array = []
    for (var i = 0; i < katzDeliline.length; i++) {
    
    array.push(`${i + 1}` + '. ' + `${katzDeliline[i]}`)
  }
    return 'The line is currently: ' + `${array.join(', ')}`
  } 
  
}