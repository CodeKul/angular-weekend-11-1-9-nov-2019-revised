console.log(`Hello World`)

{
    let num = 10
    num = 'hi'
    num = true
    num = 10.56
}

console.log(this)

function hi(n1, n2) {
    // fn bdy
    console.log(this)
    return n1 + n2
}

var res = hi(89, 50)
console.log(res)

