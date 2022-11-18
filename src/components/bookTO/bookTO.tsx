import { useState } from "react";
interface MyProps {
  bookingArray: any;
  setBookingArray: React.Dispatch<any>;
}

const BookTO = ({ bookingArray, setBookingArray }: MyProps) => {
  //! States
  // const [bookingArray, setBookingArray] = useState<any>();
  const [hours, setHours] = useState<any>();
  const [date, setDate] = useState<any>();

  //! variables
  const bookings: any[] = [];

  //! Handle Submit
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  //!HandleFormSubmit
  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    // if (date && hours) {
    //   bookings.push(date, hours);
    //   console.log(bookings);
    // } else {
    //   console.log("pick right parameters");
    // }
    // if (bookings) {
    //   setBookingArray([bookingArray, bookings]);
    //   console.log(bookingArray, "I AM BOOKING");
    //   // if (bookingArray[0] === undefined) {
    //   //   bookingArray[0].splice(1);
    //   // }
    // } else {
    //   console.log("Date not found");
    // }
    if (date && hours) {
      setBookingArray([bookingArray, hours, date]);
      // setBookingArray(date, hours, [...bookingArray]);

      console.log(bookingArray);
    } else {
      console.log("pick right parameters");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Book Time Off Here</h1>

        <input
          onKeyDown={(e) => e.preventDefault()}
          type="date"
          placeholder="dd/mm/yyyy"
          id="dateInput"
          onChange={(e) => {
            e.preventDefault();
            setDate(e.target.value);
          }}
        />
        <input
          type="number"
          maxLength={1}
          onChange={(e) => {
            e.preventDefault();
            setHours(e.target.value);
          }}
        />
        <button type="submit" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>

      {bookingArray ? <p>{bookingArray}</p> : null}
    </div>
  );
};

export default BookTO;
