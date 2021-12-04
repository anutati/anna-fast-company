export function dateTranform(milliseconds) {
    const timeNow = new Date().getTime();
    const differenceMilisec = timeNow - Number(milliseconds);
    const differenceMinutes = differenceMilisec / 60000;
    let string = "";
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const commentDate = new Date(Number(milliseconds));

    if (differenceMinutes < 2) {
        string = "1 минуту назад";
    } else if (differenceMinutes <= 5) {
        string = "5 минут назад";
    } else if (differenceMinutes <= 10) {
        string = "10 минут назад";
    } else if (differenceMinutes <= 30) {
        string = "30 минут назад";
    } else if (differenceMinutes < 1440) {
        // less then 1 day
        string = `${commentDate.getHours()} : ${commentDate.getMinutes()}`;
    } else if (differenceMinutes < 525600) {
        // less than 1 month
        string = `${commentDate.getDate()} ${months[commentDate.getMonth()]}`;
    } else {
        // more than 1 month
        string = `${commentDate.getDate()} . ${
            commentDate.getMonth() + 1
        }  .${commentDate.getFullYear()}`;
    }
    return " - " + string;
}
