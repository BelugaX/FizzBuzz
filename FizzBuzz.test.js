import React from "react";
import { render, screen } from "@testing-library/react";
import FizzBuzz from "./FizzBuzz";

//First Test Case - Red Stage
describe('FizzBuzz Component', () => {
    test('renders number 1', () => {
        render(
            <FizzBuzz number={1} />
        );
    
        expect(screen.getByText('1')).toBeInTheDocument();
    });

    //Test Case for Fizz - Red Stage
    test('renders Fizz for number 3', () => {
        render(<FizzBuzz number={3} />);

        expect(screen.getByText('Fizz')).toBeInTheDocument();
    });

    //Test Case for Buzz - Red Stage
    test('renders Fizz for number 5', () => {
        render(<FizzBuzz number={5} />);

        expect(screen.getByText('Buzz')).toBeInTheDocument();
    });

    //Test Case for FizzBuzz - Red Stage
    test('renders Fizz for number 15', () => {
        render(<FizzBuzz number={15} />);

        expect(screen.getByText('FizzBuzz')).toBeInTheDocument();
    });

    //Test Case for handling Zero
    test('renders 0', () => {
        render(<FizzBuzz number={0} />);

        expect(screen.getByText('0')).toBeInTheDocument();
    });

    //Test Case for handling Negative numbers
    test('handles negative numbers', () => {
        render(<FizzBuzz number={-1} />);

        expect(screen.getByText('Error: Input Cannot be Negative')).toBeInTheDocument();
    });

    //Test Case for handling Non-number
    test('handles non-number', () => {
        render(<FizzBuzz number="a" />);

        expect(screen.getByText('Error: Input is not a valid number')).toBeInTheDocument();
    });

    //Test Case for handling undefined input
    test('handles empty input', () => {
        render(<FizzBuzz number={undefined} />);

        expect(screen.getByText('Error: Input is not a valid number')).toBeInTheDocument();
    });
});
