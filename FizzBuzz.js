import React from 'react'

const FizzBuzz = ({ number }) => {
    if (number % 3 === 0) {
        return <div>Fizz</div>
    }
  return <div>{number}</div>;
}

export default FizzBuzz;