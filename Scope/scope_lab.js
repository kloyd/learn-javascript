// Global
var globalVar = "I'm a global variable";
let globalLet = "I'm also global but scoped with let";
const globalConst = "I'm a global constant";

{
    // Block scope
    var blockVar = "I'm a block scoped variable";
    let blockLet = "I'm a block scoped let";
    const blockConst = "I'm a block scoped const";
}

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

//console.log(blockVar);
//console.log(blockLet);


function show() {
    var functionVar = "I'm a function var";
    let functionLet = "I'm a block scoped let";
    const functionConst = "I'm a block scoped const";

}

show();


{
    // Block scope
    var blockVar = "I'm a block scoped variable";
    let blockLet = "I'm a block scoped let";
    const blockConst = "I'm a block scoped const";
    blockVar = "1";
    blockLet = "2";
    //blockConst = "3";
}

blockVar = "1";
blockLet = "2";
blockConst = "3";