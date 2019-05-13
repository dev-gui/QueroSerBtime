const array = [...Array(101).keys()]

const fizzBuzz = valores => {
    for (let valor of valores) {
        if (valor % 3 === 0 && valor % 5 === 0) console.log('FizzBuzz')
        else if (valor % 3 === 0) console.log('Fizz')
        else if (valor % 5 === 0) console.log('Buzz')
        else console.log(valor)
    }
}

fizzBuzz(array)