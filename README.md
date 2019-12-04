# Creating a BSV Transaction

This mini tutorial walks through creating a public/private key pair. Then, sending BSV to the public address from Money Button.
Then, sending the BSV from that public address to another public address, or back to Money Button.

## Target Audience

* Web developers with limited experience in Bitcoin

## Prerequisites

* ensure `node` is installed
* run `npm install` to install the dependencies in `package.json`
* have a [Money Button](https://www.moneybutton.com) account
* that should do it

#### Step 1

run `node 001.js`
to generate a public and private key pair.

Be sure you keep both your Public and Private Keys
because you'll need them to be able to access your BSV.

⚠️ If you lose your Private Key, you lose your BSV. ⚠️

The output from running the script above will look similar to:

```
privateKeyString cRcHetYy7gyxVvHn6tTV5b8yvycEBLPDTj8ZVgf6fJKDUowC9i3V
publicAddress mitR9nkAcaqEkbifFUZWMmiS8nJL9LPDuK
```

Your keys will be different than the above.

You can now send BSV to the public address using Money Button or any wallet that supports BSV.

Try sending a small amount of BSV, like 10 or 25 cents, from [Money Button](https://moneybutton.com).

#### Step 2

After Step 1, you should now have a small amount of BSV in an address you have created!

Use a service like https://whatsonchain.com/,
and enter your public key to see
the bitcoin transaction (Tx)
representing the BSV transfer you just made.

See your transaction? Okay, proceed!

---

First, update file `002.js` with your public key.

Then, run `node 002.js` which will output a .json object,
similar to what is displayed below.

This object has important information including:

* address
* amount
* confirmations

Most importantly, you're going to need some of this information
in Step 3, so be sure to note it in full, and accurately.

```
[
  {
    "address": "1CGoU6rc6hVgj3uXEbbrmVUsmdRgzU72Fs",
    "txid": "b4acafc6ecc8fc2e8497bf9d8b2bd411ab4410fc6662a9f9a0ba011da49669ac",
    "vout": 1,
    "amount": 0.01150839,
    "satoshis": 1150839,
    "value": 1150839,
    "height": 0,
    "confirmations": 0,
    "scriptPubKey": "76a9147ba66976545535f7aa0a503d132a62d5323433b988ac",
    "script": "76a9147ba66976545535f7aa0a503d132a62d5323433b988ac",
    "outputIndex": 1
  }
]
```

#### Step 3

By now, you should have seen your transaction in Step 1,
and now have a .json object that represents your UTXO (unspent transaction).

---

Now, update `003.js` with 3 things:

1. Your `public key`
1. Your `private key`
1. Another `new public key`

The public/private key pair is needed to access then unlock
the Tx you originally posted.

The new public key is where you're going send these funds to.

I just used the public address to my Money Button account for
the `new public key`.

---

run `node 003.js` which will create a Transaction
from your last UTXO, and broadcast it to the bitcoin mining network.

You will receive a Transaction ID.

And you will be able to see a transaction for
the funds, sent a new public address...
or in my case, back to my public Money Button address.
