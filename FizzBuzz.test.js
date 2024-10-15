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
});
