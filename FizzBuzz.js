import React, { useState } from 'react';

const FizzBuzz = () => {
    const [userInput, setUserInput] = useState('');
    const [result, setResult] = useState('');

    const validateInput = (input) => {
        if (input.trim() === '') { // Check for empty or whitespace-only strings
            return 'Error: Input is not a valid number';
        }
        
        const number = Number(input);
        
        if (isNaN(number)) {
            return 'Error: Input is not a valid number';
        }
        
        if (number < 0) {
            return 'Error: Input Cannot be Negative';
        }
        
        return null;
    };    

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

    const handleInputChange = (e) => {
        const userInputValue = e.target.value;
        setUserInput(userInputValue);
    
        const errorMessage = validateInput(userInputValue);
    
        if (errorMessage) {
            setResult(errorMessage);
        } else {
            const number = Number(userInputValue);
            setResult(fizzBuzzLogic(number));
        }
    };    

    return (
        <div>
            <h1>FizzBuzz App</h1>
            <input 
                type='text'
                value={userInput}
                onChange={handleInputChange}
                placeholder='Enter a number'
            />
            <div>{result}</div>
        </div>
    )
}

export default FizzBuzz;