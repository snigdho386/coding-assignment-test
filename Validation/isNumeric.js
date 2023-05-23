let isNumeric = function (n) {
    for (let i = 0; i < n.length; i++) {
        if (!(n[i] >= 0 && n[i] <= 9))
            return false;
    }
    return true;
}
module.exports = isNumeric;