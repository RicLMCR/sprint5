import React from 'react';
import { render, screen } from '@testing-library/react';
import UserInfo from "./UserInfo";

test('renders user info', () => {
  render(<UserInfo />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
