import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import FizzBuzz from "./FizzBuzz";

// First Test Case - Red Stage
describe('FizzBuzz Component', () => {
    test('renders number 1', () => {
        render(<FizzBuzz />);
        fireEvent.change(screen.getByPlaceholderText('Enter a number'), { target: { value: '1' } });

        expect(screen.getByText('1')).toBeInTheDocument();
    });

    // Test Case for Fizz - Red Stage
    test('renders Fizz for number 3', () => {
        render(<FizzBuzz />);
        fireEvent.change(screen.getByPlaceholderText('Enter a number'), { target: { value: '3' } });

        expect(screen.getByText('Fizz')).toBeInTheDocument();
    });

    // Test Case for Buzz - Red Stage
    test('renders Buzz for number 5', () => {
        render(<FizzBuzz />);
        fireEvent.change(screen.getByPlaceholderText('Enter a number'), { target: { value: '5' } });

        expect(screen.getByText('Buzz')).toBeInTheDocument();
    });

    // Test Case for FizzBuzz - Red Stage
    test('renders FizzBuzz for number 15', () => {
        render(<FizzBuzz />);
        fireEvent.change(screen.getByPlaceholderText('Enter a number'), { target: { value: '15' } });

        expect(screen.getByText('FizzBuzz')).toBeInTheDocument();
    });

    // Test Case for handling Zero
    test('renders 0', () => {
        render(<FizzBuzz />);
        fireEvent.change(screen.getByPlaceholderText('Enter a number'), { target: { value: '0' } });

        expect(screen.getByText('0')).toBeInTheDocument();
    });

    // Test Case for handling Negative numbers
    test('handles negative numbers', () => {
        render(<FizzBuzz />);
        fireEvent.change(screen.getByPlaceholderText('Enter a number'), { target: { value: '-1' } });

        expect(screen.getByText('Error: Input Cannot be Negative')).toBeInTheDocument();
    });

    // Test Case for handling Non-number
    test('handles non-number', () => {
        render(<FizzBuzz />);
        fireEvent.change(screen.getByPlaceholderText('Enter a number'), { target: { value: 'a' } });

        expect(screen.getByText('Error: Input is not a valid number')).toBeInTheDocument();
    });

    // Test Case for handling empty input
    test('handles empty input', () => {
        render(<FizzBuzz />);
        fireEvent.change(screen.getByPlaceholderText('Enter a number'), { target: { value: ' ' } });

        expect(screen.getByText('Error: Input is not a valid number')).toBeInTheDocument();
    });
});
