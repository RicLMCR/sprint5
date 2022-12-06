import React from "react";
import Navbar from "./Navbar"
import { render, screen } from '@testing-library/react';

describe('tests that text is shown in the app', () => {

//make intereface for props and fill out proper data types

  test('renders title which says "Counter App"', () => {
    render(<Navbar data={undefined} setData={undefined} setUserBookings={undefined} userBookings={undefined} setLoading={undefined} />);
    const h2Element = screen.getByText(/Paid Time Off/);
    expect(h2Element).toBeInTheDocument();
  });
})