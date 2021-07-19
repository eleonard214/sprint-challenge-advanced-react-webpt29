import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event' 

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)
    const firstName = screen.getByLabelText('First Name:')
    const lastName = screen.getByLabelText('Last Name:')
    const address = screen.getByLabelText('Address:')
    const city = screen.getByLabelText('City:')
    const state = screen.getByLabelText('State:')
    const zip = screen.getByLabelText('Zip:')
    const button = screen.getByRole('button')
    const message =  screen.getByTestId('successMessage')

    userEvent.type(firstName, 'Erica')
    userEvent.type(lastName, 'Leonard')
    userEvent.type(address, '123 A Street')
    userEvent.type(city, 'Some City')
    userEvent.type(state, 'Logical')
    userEvent.type(zip, '12345')
    userEvent.click(button)
    expect(message).toBeInTheDocument()
});
