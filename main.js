// ES Modulesの書き方
// import { ESFunc } from './utils/anotherFunction.js'; 
// ESFunc()

// CommonJSの書き方
const { commonFunc } = require('./utils/anotherFunction.js')
const args = require('./yargs.js')
commonFunc()
console.log(args.message)
