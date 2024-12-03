// ES Modulesの書き方
// package.jsonに"type": "module"
// export const eSFunc = () => {
//     console.log("eSFunc()が実行されました。")
// }

// CommonJSの書き方
// package.jsonに"type": "commonjs"
const commonFunc = () => {
    console.log("CommonFunc()が実行されました。")
}

module.exports = {commonFunc}