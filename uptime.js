/**
 * @returns {Array}
 */
function time() {
    let msec = Number(process.uptime().toFixed(0)) * 1000;
    let totalSeconds = Math.floor(msec / 1000);
    let seconds = Math.floor(totalSeconds % 60)
    let minutes = Math.floor(totalSeconds / 60);
    totalSeconds %= 3600;
    let hours = Math.floor(totalSeconds / 3600);
    let days = Math.floor(totalSeconds / 864000);
    
    return [toString(days), toString(hours), toString(minutes), toString(seconds)]
};
module.exports = time