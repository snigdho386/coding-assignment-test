let fac = function (n) {
    if (n <= 1)
        return 1;
    return n * fac(n - 1);
}
module.exports = fac;