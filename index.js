// code your solution here
// Function saturdayFun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Function mondayWork
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

// Function wrapAdjective
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    }
}

// Example usage of wrapAdjective
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer")); //=> "You are !!!a dedicated programmer!!!"

