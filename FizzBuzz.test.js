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
});
