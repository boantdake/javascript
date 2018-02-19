let raceNumber = Math.floor(Math.random()*1000);
let earlyRegRunner = true;
let runnerAge = 19;
if(earlyRegRunner != true){
  raceNumber = raceNumber + 1000;
}
if(runnerAge>18 && earlyRegRunner){
  console.log("Race begins at 9:30 am " + raceNumber);
}else if((runnerAge>18 && earlyRegRunner === false) || (runnerAge<18 && earlyRegRunner === true)){
  console.log("Race begins at 11:00 am " + raceNumber);
}else if(runnerAge<18 && earlyRegRunner === false){
  console.log("Race begins at 12:30 pm " + raceNumber);
}else{
  console.log("See the registration Desk");
}


//output Race begins at 9:30 am 357 <<--last bit will change.