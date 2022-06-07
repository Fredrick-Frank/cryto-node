# cryto-node
This project is out of the passion for cryptocurrency...

#Steps I carried out...
* Node.js was installed on my laptop
* I installed dependencies
* Created the first block
* Created the blockchain

## Properties of a block
Earlier, we mentioned that the blockchain is composed of several blocks. Let’s explore what the properties of each block are. Every block in the chain is made up of the following properties:

* Proof of work: The amount of computational effort required to get a block hash
* Block hash: Block ID derived through cryptographic calculation
* Timestamp: Time when the block was created
* Index: Block’s position on the chain
* Data recorded on the blockchain
* The previous block’s hash

## Installing dependencies
Since we’re building a cryptocurrency with Node.js, we need to first install the JavaScript crypto.js package in our project folder.
// create a package.json file
npm init -y

//install the crypto-js dependency
npm install crypto-js

### Creating our first block
Now that we have our project structure set up with our package installed, let‘s create our first block and subsequently build our own cryptocurrency. 
nodejsCoin.js file was created, where the codes were written.

The Secure Hash Algorithm (SHA256) was imported from the crypto-js package. This helps in encrypting our block hash ID.
As with JavaScript and other object oriented programming languages like Java, whenever a class is created, a constructor method is called by default. Whenever the Block object is called using the new keyword, we call the constructor method and pass the parameters needed to create a new block.

Inside the constructor method, we assigned the values of the parameters, arguments, to the field.
The this keyword signifies that we’re referring to the field name that come after it.
Lastly, we created a generateHash() method that generates and returns the hash of the block using the properties defined in the constructor. 
Now that we’ve created our first block, let’s create the blockchain.

### The Blockchain was created with the following process:
The blockchain is a system for recording a collection of data in a chain-like way, increasing data integrity, reducing vulnerabilities, and making the data nearly impossible to be hacked.

More specifically, a blockchain is a distributed database that stores transactions in groups known as blocks. 
Let’s create a blockchain class that will manage the chain of of blocks:

Also an instance to test our blockchain was created too.

PS: This is a very basic project as I am still developing my skill in backend technology.
