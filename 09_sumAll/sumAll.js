const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR"
    if (start < 0 || end < 0) return "ERROR";

    if (start > end) {
        let tmp = start;
        start = end;
        end = tmp;
    }

    let total = 0;
    for (let i = start; i <= end; i++) total += i;
    return total;
};

// Do not edit below this line
module.exports = sumAll;
