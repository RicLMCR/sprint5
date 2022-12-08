import Navbar from "../components/navBar/Navbar"
import { render, screen } from '@testing-library/react';
import  data  from '../App'



describe('tests that text is shown in the app', () => {
//make intereface for props and fill out proper data types

  test('renders title which says "Paid Time Off"', () => {
    render(<Navbar data={data} setData={undefined} setUserBookings={undefined} userBookings={undefined} setLoading={undefined} />);
    const container = screen.getByText(/Paid Time off/);
    expect(container).toBeInTheDocument();
  });

})
