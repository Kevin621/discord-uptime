/**
 * @returns {string}
 */
function uptime() {
    let mseconds = Number(process.uptime().toFixed(0)) * 1000;
    let seconds = Math.floor(mseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let timestring = "";

    if (days > 0) timestring += "Days: " + days;
    else if (hours > 0) timestring += "Hours: " + hours;
    else if (minutes > 0) timestring += "Minutes: " + minutes;
    else if (seconds > 0) timestring += "Seconds: " + seconds;

    return timestring;
};

export {
    uptime
}