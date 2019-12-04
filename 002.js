// Filename:
// 002.js
// Description:
// Getting transaction information from an address
// on the BitcoinSV network

var publicAddress = "insert-your-key-here";

console.log("visit bitindex url", `https://api.bitindex.network/api/v3/main/addr/${publicAddress}/utxo`)

// Then visit the URL above to see a .json object similar to what is displayed below

// [
//   {
//     "address": "1CGoU6rc7hVgj3uXmbbrmVUsmdRgzU72Fs",
//     "txid": "b4acafc6ecc8fc2e8497bf9d8b2bd411ab4410fc6662a9f9a0ba011da49669ac",
//     "vout": 1,
//     "amount": 0.01150839,
//     "satoshis": 1150839,
//     "value": 1150839,
//     "height": 0,
//     "confirmations": 0,
//     "scriptPubKey": "76a9147bc66976545535f7aa0a503d132a62d5323433b989ad",
//     "script": "76a9147bc66976545535f7aa0a503d132a62d5323433b989ad",
//     "outputIndex": 1
//   }
// ]
