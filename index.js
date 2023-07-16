function scuberGreetingForFeet(feet_number){
  
  if(feet_number<=400){
    return 'This one is on me!';
  }else if(feet_number>400 && feet_number<= 2000){
    return 'That will be twenty bucks.';
  }else if(feet_number>2000 && feet_number<=2500){
    return 'I will gladly take your thirty bucks.';
  }else{
    return 'No can do.';
  }
  // Write your code here!
}

function ternaryCheckCity(city){
  if(city==="NYC"){
    return 'Ok, sounds good.';
  }else{
    return 'No go.';
  }
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if(tip==='generous'){
    return 'Thank you so much.';
  }else if(tip==='not as generous'){
    return 'Thank you.'
  }else{
    return "Bye."
  }
}