require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss idea entry bone void'; 
let testAccounts = [
"0xb0957f88b45e0d8d617e0ec968af8e74c2efb99c9dafee3ceb2ab17744dfdc69",
"0x84bef6ed39ab0ee4c1ac8caded3976ce41f6c297ed279b33dfc89a49ea55e228",
"0x2c7002b7e5eabe954aab563e27b6b0fb9e15a2844b116611a459dc22933f4265",
"0x03407f431f39d390c7ead0693bbdce288d09a89b2f59f8583830ac05790004bf",
"0xe5fa806881f9727976d9389da2bf01776d0b2a4d4735e697d8c9a41c9a95f625",
"0x7eefb3eabcb6ef38724f88b8a48a7f6b4a7663579566cbb6925317b4c589247f",
"0xedfbd7f5be3a84c9d108030ffc6e733a27ee6e805a72df487d15d93bf3909831",
"0x09a365a13c75e27976dc49bc2c36ce1143a6a217e940a529856190a034925c56",
"0xea55ac2e841e1a9f5e5a9ee5099a5bea477ba06a3f6334d3f274ecfc502f16b5",
"0xe5178337998a3a8c1a282f6b8d8f88bf4ce78b0be81e649bac713bfd755e00d4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
