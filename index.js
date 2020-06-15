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

function currentLine(line) {
  if (!line.length) {
    return 'The line is currently empty.';
  }

  let numbersAndNames = [];
  for (let i = 0; i < line.length; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`);
  }
  return 'The line is currently: ' + numbersAndNames.join(', ');
}