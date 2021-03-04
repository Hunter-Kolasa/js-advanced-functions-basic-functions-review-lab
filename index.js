// Your code here
function saturdayFun(activity="roller-skate") {
    return(`This Saturday, I want to ${activity}!`)
}

function mondayWork(errand="go to the office") {
    return(`This Monday, I will ${errand}.`)
}

function wrapAdjective(flair = '*') {
    return function(value = 'special') {
        return `You are ${flair}${value}${flair}!`
    }
}

const Calculator = {
    add: function(a,b) {
        return a + b
    },
    subtract: function(a,b) {
        return a - b
    },
    multiply: function(a,b) {
        return a * b
    },
    divide: function(a,b) {
        return a / b
    }
}

let actionApplyer = function(startInt, funcArray) {
    let a = startInt

    for (let i = 0; i < funcArray.length; i++){
        a = funcArray[i](a)
    }
    return a
}