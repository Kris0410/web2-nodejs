// template Literal
// 물결 아래 있는 ` 기호

var name = 'k8805'
var letter = 'abcdefg' + name + '\n\
\
fdsafdsa';

// \은 코드상의 줄바꿈 기능
// 줄바꿈 \r\n or \n 의 차이는 무엇인가? 

console.log(letter);


var letter = `abcdefg ${name} 

fdsafdsa`;

console.log(letter);