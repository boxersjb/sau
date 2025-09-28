//Indentifier

//Variable is data collect for dev
var dti01 = 'aaa' //global //everywhare
let dti02 = 'vvvv' //local //in block {}
const dti03 = 'cccc' //don't change //local //in block {}

dti01 = '111'
dti02 = '222'
//dti03 = '333' (error)
{
    var dti04 = 'ddd'
    let dti05 = 'fff'
    const dti06 = 'eee'
    console.log(dti01, dti02, dti03, dti04, dti05, dti06)
}

console.log(dti01, dti02, dti03, dti04)