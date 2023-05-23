let fib = function (n) {
    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    if (n == 0)
        curr = 0;
    return curr;
}
module.exports = fib;