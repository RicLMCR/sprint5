export const getFetch = async (datesBooked: any, data: any) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      datesBooked: [datesBooked],
      userId: data.userId,
    }),
  };

  try {
    if (data) {
      const response: any = await fetch(
        `/users/${data.userId}/booking`,
        requestOptions
      );
      const bookingData = await response.json();
      
    }
  } catch (error: any) {
    console.log(error.message);
  }
};
