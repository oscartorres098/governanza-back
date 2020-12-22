const Cryptr = require('cryptr');
const cryptr = new Cryptr('ahg-htr-frtgy-4567');

var helplers = {
  cryptr: async (token) => {
    return cryptr.encrypt(token);
  },
  decryptr: async (token) => {
    return cryptr.decrypt(token);
  }
}

module.exports = helplers;
