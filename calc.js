var operation = {}

operation.add = function(a, b){
    return a+b
}

operation.sub = function(a, b){
    return a-b;
}

operation.mul = function(a,b){
    return a*b
}

operation.div = function(a, b){
    return a/b;
}

module.exports = operation;