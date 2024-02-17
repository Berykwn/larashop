export default function useDateFormat(date) {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const formattedDate = new Date(Date.parse(date)).toLocaleDateString(
        "en-US",
        options
    );
    return formattedDate;
}
