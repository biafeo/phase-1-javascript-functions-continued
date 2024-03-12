// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(toDo = "go to the office") {
    return `This Monday, I will ${toDo}.`;
}

function wrapAdjective(highlight) {
    return function (adjective = "special"){
       return  `You are ${highlight}${adjective}${highlight}!`;
    }
}
