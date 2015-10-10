// convert dates to RFC3339 format for the google calendar api
var toRFC3339String = function(dateString) {
    function pad(n) { return n < 10 ? '0' + n : n }

    return dateString.getUTCFullYear() + '-'
        + pad(dateString.getUTCMonth() + 1) + '-'
        + pad(dateString.getUTCDate()) + 'T'
        + pad(dateString.getUTCHours()) + ':'
        + pad(dateString.getUTCMinutes()) + ':'
        + pad(dateString.getUTCSeconds()) + 'Z'
}
// finds the amount of days between two dates
Date.daysBetween = function(date1, date2) {
    var one_day=1000*60*60*24;
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
    var difference_ms = date2_ms - date1_ms;
    return Math.round(difference_ms/one_day);
}
