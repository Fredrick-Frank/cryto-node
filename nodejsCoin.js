//import that secure hash algorithm from the crypto-js package

const SHA256 = require("crypto-js/sha256");

//create the block bycreating a JS class
class Block {
    constructor(index, timestamp, data, previousHash) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.generateHash();
    }
    generateHash() {
        return SHA256(this.index + this.timestamp + this.previousHash + JSON.stringify(this.data)).toString()
    }
}

//creating the blockchain...
class Blockchain {
    constructor() {
        this.blockchain = [this.createGenesisBlock()];
    }
    createGenesisBlock() {
        return new Block(0, "6/06/2022", "first block on the chain", "0");
    }
    getTheLatestBlock() {
        return this.blockchain[this.blockchain.length - 1];
    }
    addNewBlock(newBlock) {
        newBlock.previousHash = this.getTheLatestBlock().hash;
        newBlock.hash = newBlock.generateHash();
        this.blockchain.push(newBlock);
    }

    //testing the integrity of the chain 
    validateChainIntegrity() {
        for (let i = 1; i < this.blockchain.length; i++) {
            const currentBlock = this.blockchain[i];
            const previousBlock = this.blockchain[i - 1];
            if (currentBlock.hash !== currentBlock.generateHash()) {
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
            return true;
        }
    }
}

//create an instance to test our blockchain... the coin tagg anzCoin

let anzCoin = new Blockchain();
console.log("mining anzCoin in Progress....");
anzCoin.addNewBlock(
    new Block(1, "06/06/2022", {
        sender: "Frank Fred",
        recipient: "LogRocket",
        quantity: 40
    })
);

anzCoin.addNewBlock(
    new Block(2, "07/06/2022", {
        sender: "Kenny John",
        recipient: "Binance",
        quantity: 100
    })
);

anzCoin.addNewBlock(
    new Block(3, "13/08/2022", {
        sender: "Elena James",
        recipient: "Mary",
        quantity: 56
    })
);

console.log(JSON.stringify(anzCoin, null, 5));