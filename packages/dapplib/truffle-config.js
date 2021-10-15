require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note pitch exchange idea area slot general'; 
let testAccounts = [
"0x99002fefe07380eaa04a1468c7a9112a979fe5a236d80f77d486f9edbc20857e",
"0xb6b4100a5bbb7a5eb516fa7d9bfd4fcb2343c9460e3f81c478ced8d253f82c37",
"0x626ae92e560092735e58d4ddc8d97b239c5d65d972061c3f1521213356c03180",
"0x0f26064dd11e9106d7ec2d67a9d64d2404f00420e59d96657e172d397878f52d",
"0xad74b6132b3e396a179e0dd1ad06e5cdb47136f8f0b927a6fcb436fe9a6cf147",
"0xf0761ccb0704bacf28c000ecfa454dab80c5d55ac449f10a64475810c867d0c1",
"0xdc3b1a4c9630ae4153158b15fde3edc0bc51640e774947bb05717d58547f4049",
"0x8dd0795a77ca3cde6104bb5183c39bbcd7286fbcaa36e81f1a70ed3cd288a13c",
"0x9d06ad5a3319ab577736c1e58fd0168ff9970afe865047ca38de136ef6c0dfb9",
"0xec47bca1a1e6b06108176f809b305082f349a983cff645b0314c3b04f37434b3"
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
            version: '^0.8.0'
        }
    }
};

