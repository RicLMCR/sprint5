// Convert string to date in format: DD/MM/YYYY
function convert(dates: any) {
    var date = new Date(dates),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    return ([date.getFullYear(), mnth, day].join("-"));
}

function getDates() {
    var date1 = new Date(convert('Wed Nov 02 2022 15:56:51 GMT+0000'));
    var date2 = new Date(convert('Wed Nov 04 2022 15:56:51 GMT+0000'));

    // Get all dates inbetween the two dates
    var dates = [];
    while (date1 <= date2) {
        dates.push(convert(date1));
        date1.setDate(date1.getDate() + 1);
    }

    console.log(dates);
    return dates;
};

function getHours(dates: any) {
    // Take dates loop through dates mon-Thu - 8, Fri 5 sat-sun 0
    let booked = 0

    let day

    for (let i = 0; i < dates.length; i++) {

        let today = dates[i].day

        switch (today) {
            case "Sun":
                booked = (booked + 0)
                day = today
                break;
            case "Mon":
                booked = (booked + 8)
                day = today
                break;
            case "Tue":
                booked = (booked + 8)
                day = today
                break;
            case "Wed":
                booked = (booked + 8)
                day = today
                break;
            case "Thu":
                booked = (booked + 8)
                day = today;
                break;
            case "Fri":
                booked = (booked + 5)
                day = today;
                break;
            case "Sat":
                booked = (booked + 0)
                day = today;
                break;
        }

        // console.log(day)
    }
    return booked;
}

module.exports = {
    convert,
    getDates,
    getHours
}