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
   return `Currently serving ${nextInLine}!`
  }
}

function currentLine(list) {
  if (list.length === 0) {
    return "The line is currently empty."
  } else {
    var str = "The line is currently: "
  if (katzDeliLine.length >0){
    for (var i = 0; i < katzDeliLine.length; i++) {
      arr.push((i+1) + ". " + katzDeliLine[i])
      }
    return line + arr.join(", ")
    }
  }
}