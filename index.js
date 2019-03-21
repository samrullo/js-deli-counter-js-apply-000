function takeANumber(line, name){
  var line_length=line.length;
  var number=line_length+1;
  line.push(name);
  return `Welcome, ${name}. You are number ${number} in line.`;
}

function nowServing(line){
  if(line.length===0){
    return "There is nobody waiting to be served!";
  }else{
    var cur_person=line[0];
    line.shift();
    return cur_person;
  }
}

function currentLine(line){
  
}