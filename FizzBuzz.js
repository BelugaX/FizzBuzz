import React from 'react'

const FizzBuzz = ({ number }) => {
    if (typeof number !== 'number' || isNaN(number)) {
        return <div>Error: Input is not a valid number</div>
    }
    if (number < 0) {
        return <div>Error: Input Cannot be Negative</div>
    }
    if (number === 0) {
        return <div>0</div>
    }
    if (number % 3 === 0 && number % 5 === 0) {
        return <div>FizzBuzz</div>
    }
    if (number % 3 === 0) {
        return <div>Fizz</div>
    }
    if (number % 5 === 0) {
        return <div>Buzz</div>
    }
  return <div>{number}</div>;
}

export default FizzBuzz;