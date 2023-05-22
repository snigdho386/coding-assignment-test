const express = require("express");
const router = express.Router();

router.get("/getPrime", async (req, res) => {
    try {
        let n = req.query.n;
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
        console.log(cnt);
        res.send(ans.toString());

    } catch (error) {
        console.log(error)
        res.json({ success: false })
    }
})

module.exports = router