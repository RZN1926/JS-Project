// alert('hello js')
console.log('hi console')

// variables
var a = 7
let b = 'poop'
const c = true
let f = `${a}`
let names = ['qwerty', 'dekma', 'pop']
console.log(a, b, c, null, undefined, NaN, names[0])

// if
if (a > 5) {console.log('a more that 5'), console.log('end')}

// for
for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

// func
function sum_2(a, b) {
    let c = a + b
    return c
}

const mult_2 = (a, b) => a * b
console.log(sum_2(14, 1), mult_2(6, 4))













