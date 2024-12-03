const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers'); 

// CommonJSでyargsを使用する場合は、hideBinを挟まないとできない。
const args = yargs(hideBin(process.argv))
  .command("* <message>", "print a message received as an argument")
  .parseSync();

module.exports = args;