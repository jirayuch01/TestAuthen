const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');       //use in web
console.log(token);

data.id = 6;     //change value
var token = jwt.sign(data, '123abc');

var decoded = jwt.verify(token, '123abc');  //key
console.log('decoded', decoded);

// jwt.decode
// jwt.sign

var data = {
    id: 4
};
var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}
token.data.id = 5;       //key
 token.hash = SHA256(JSON.stringify(token.data)).toString();
var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
if (resultHash === token.hash) {
    console.log('Data was not changed');
} else {
    console.log('Data was changed. Do not trust!');
}
