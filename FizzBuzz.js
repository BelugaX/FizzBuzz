import React from 'react'

const FizzBuzz = ({ number }) => {
    const validateInput = () => {
        if (typeof number !== 'number' || isNaN(number)) {
            return <div>Error: Input is not a valid number</div>
        }
        if (number < 0) {
            return <div>Error: Input Cannot be Negative</div>
        }
        return null;
    }

    const fizzBuzzLogic = (number) => {
        let result = '';

        if (number === 0) return '0';

        //Multiples of 3 - Green Stage
        if (number % 3 === 0) result += 'Fizz';

        //Multiples of 5 - Green Stage
        if (number % 5 === 0) result += 'Buzz';

        return (
            <div>{result || number.toString()}</div>
        )
    }

    const errorMessage = validateInput();
    if (errorMessage) return <div>{errorMessage}</div>

    return <div>{fizzBuzzLogic(number)}</div>
}

export default FizzBuzz;