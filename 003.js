// Filename:
// 003.js
// Description:
// Getting transaction information from an address
// on the BitcoinSV network

var bsv = require('bsv');
var axios = require('axios');

// Where you're sending bitcoin from
var publicAddress = "insert-your-public-address-here";
var privateKeyString = "insert-your-private-key-here";

var privateKey = bsv.PrivateKey.fromWIF(privateKeyString);

// Where you're sending bitcoin to
// Ryan's public Money Button address
// Replace this with another public address you generate,
// or from an existing wallet
var newAddress = "1EReqdHHJU1SWWdLYhwFV14KuvHNhSxdGC";

// Create a UTXO object based on an existing bitcoin UTXO (unspent transaction)
// This is where the .json object from Step 2 goes.
// Replace this .json object with yours from Step 2.
var utxo = new bsv.Transaction.UnspentOutput(
  // {
  //   "address": "1CGoU6rc7hVgj3uXmbbrmVUsmdRgzU72Fs",
  //   "txid": "d4f6923b55237c480bdbb6e6a346becd632f128ec4961541a74aa850431fa5a6",
  //   "vout": 1,
  //   "amount": 0.00103788,
  //   "satoshis": 103788,
  //   "value": 103788,
  //   "height": 611547,
  //   "confirmations": 1,
  //   "scriptPubKey": "76a9143ab2bd1c5f14bc7776ca316a2c0c6da41680eb7e88ac",
  //   "script": "76a9143ab2bd1c5f14bc7776ca316a2c0c6da41680eb7e88ac",
  //   "outputIndex": 1
  // }
);

// Set the amount of Satoshis to be sent to the new address
// The amount of Satoshis is based on the `satoshis` in the object above
var transaction = new bsv.Transaction().from([utxo]).to(newAddress, 103788).change(publicAddress).sign(privateKey);
// Set the fee to at least 546 Satoshis (minimum amount)
if (transaction.getFee() < 546) {
  transaction.fee(546)
}

// turn this Transaction into a hex
var hash = transaction.serialize();

function resolve(result) {
  console.log("====> RESULT", result);
}
function reject(result) {
  console.log("====> REJECTION", result);
}

// Sends, or "Broadcasts" the data
function send(tx) {
  const txhash = tx.serialize();
  const url = "https://api.whatsonchain.com/v1/bsv/main/tx/raw";
  const headers = { "Content-Type": "application/json" };
  const data = { txhex: txhash };
  const opts = {
     method: "POST",
     url: url,
     headers,
     data: JSON.stringify(data)
  };

  return new Promise(function(resolve, reject) {
    axios(opts).then(r =>
      if (r.status !== 200) {
        console.log("REJECTING", r, r.status);
        reject("error while retrieving response from server " + r.status);
      } else {
        console.log("=======>", r);
        console.log("=======> Transaction ID", r.data);
        resolve(r);
      }
    }).catch(reject);
  });
}

var submission = send(transaction); // will return a javascript Promise

// Get a Transaction ID for your latest, posted bitcoin Transaction
// You'll see something like this in the Terminal:
// =======> Transaction ID 9967bc109e0b58b825789512f30ea2b976579775ce003e811b4b607b9ae36403
