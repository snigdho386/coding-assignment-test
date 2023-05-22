const express = require("express");
const router = express.Router();

router.get("/getFibonacci", async (req, res) => {
    try {

        let n = req.query.n;
        let prev = 0;
        let curr = 1;
        for (let i = 2; i <= n; i++) {
            let next = prev + curr;
            prev = curr;
            curr = next;
        }
        if (n == 0)
            curr = 0;
        res.send(curr.toString());

    } catch (error) {
        console.log(error)
        res.json({ success: false })
    }
})

module.exports = router