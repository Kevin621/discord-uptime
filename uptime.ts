
/**
 * @returns {Array}
 */
function time() {
    let msec = Number(process.uptime().toFixed(0)) * 1000;
    let totalSeconds = Math.floor(msec / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    
    return [days, hours, minutes, seconds]
};

export = time

