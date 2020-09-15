import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Patients from './Patients';

it("renders without crashing", () => {
    const {getByText} = render(<Patients />)
    expect(getByText('List patients')).toBeInTheDOM()
});