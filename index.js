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
    let place = 1
    let index = 0
    while (index < list.length) {
      str += `${place}. ${list[index]}, `
      place++
      index++
      }
      str = str.slice(0, -2)
    }
    return str
  }