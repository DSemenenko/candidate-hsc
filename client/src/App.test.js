import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from './App';

it("renders without crashing", () => {
    const {getByText} = render(<App />)
    expect(getByText('Hello, world!')).toBeInTheDOM()
});