//function declaration style
function squareDecl (number1, number2) {
    const numSquare1 = Math.pow(number1, 2);
    const numSquare2 = Math.pow(number2, 2);

    const squareTemp = numSquare1 + numSquare2;
    const squareTotal = Math.pow(squareTemp, 2);
    return squareTotal;
}

const resultDecl = squareDecl(9, 16);
console.log(resultDecl);

//function expression style
const squareExpr = function (number1, number2) {
    const numSquare1 = Math.pow(number1, 2);
    const numSquare2 = Math.pow(number2, 2);

    const squareTemp = numSquare1 + numSquare2;
    const squareTotal = Math.pow(squareTemp, 2);
    return squareTotal;
};

const resultExpr = squareExpr(9, 16);
console.log(resultExpr);

//function arrow style
squareArrow = (number1, number2) => {
    
    const numSquare1 = Math.pow(number1, 2);
    const numSquare2 = Math.pow(number2, 2);

    const squareTemp = numSquare1 + numSquare2;
    const squareTotal = Math.pow(squareTemp, 2);
    return squareTotal;
};

const resultArrow = squareArrow(9, 16);
console.log(resultArrow);

// function arrow style 1 line
squareShort = (number1, number2) => Math.pow(Math.pow(number1,2) + Math.pow(number2,2),2);
console.log(squareShort(9, 16));