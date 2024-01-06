export const statusOpt = [
    "Interviews",
    "Open for Applications",
    "Application Closed"
]

export const typeOpt = [
    "Full-Time",
    "Part-Time",
    "Hyrid",
    "Remote"
]

export const sortOpt = [
    "a-z",
    "z-a",
    "New",
    "Old"
]

export const formatDate = (inputDate) => {
    const [month, day, year] = inputDate.split('/').map(Number);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return "Invalid Date";
    }

    const inputDateTime = new Date(year, month - 1, day).getTime();
    const today = new Date().setHours(0, 0, 0, 0);

    if (inputDateTime === today) {
        return "Today";
    }

    const formattedDate = new Date(inputDateTime)
        .toLocaleDateString('en-EN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });

    return formattedDate;
}