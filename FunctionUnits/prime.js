let nPrime = function (n) {
    prime = Array.from({ length: 1000000 }, () => true);

    for (p = 2; p * p <= 1000000; p++) {

        if (prime[p] == true) {
            for (i = p * p; i <= 1000000; i += p)
                prime[i] = false;
        }
    }
    let ans = -1;
    let cnt = 0;
    for (let num = 2; cnt < n; num++) {
        if (prime[num]) {
            cnt++;
            ans = num;
        }
    }
    return ans;
}
module.exports = nPrime