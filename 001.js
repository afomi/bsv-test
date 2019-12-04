// Filename:
// 001.js
// Description:
// Generate a Private and Public Key Pair
// Then use send some BSV to the Public Key
// from an existing service

var bsv = require('bsv');
var buffer = require('buffer');

// Generate a Key (object)
let privateKey = bsv.PrivateKey.fromRandom()
// or...
// Generate a Key (object) for the TestNet
// let privateKey = bsv.PrivateKey.fromRandom('testnet')

// Get the Private Key as a String
let privateKeyString = privateKey.toString();
console.log("privateKeyString", privateKeyString);

// Get the Public Address as a String
let publicAddress = privateKey.toAddress().toString()
console.log("publicAddress", publicAddress);

// Now, send money from Money Button to the Public Address

// Money Button will create a bitcoin transaction (Tx) and transfer the
// specified amount to the public address
