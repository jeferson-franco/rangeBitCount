function solution(a, b) {
    let result = 0;
    for (let i = a; i <= b; i++) {
        result += i.toString(2).split('').filter(x => x === '1').length;
    }
    return result;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test rangeBitCount

// alternative solution
