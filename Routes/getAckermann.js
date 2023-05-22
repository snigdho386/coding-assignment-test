const express = require("express");
const router = express.Router();

router.get("/getAckermann", async (req, res) => {
    try {
        let m = req.query.m;
        let n = req.query.n;
        function ack(m, n) {
            if (m == 0) {
                return n + 1;
            }
            else if ((m > 0) && (n == 0)) {
                return ack(m - 1, 1);
            }
            else if ((m > 0) && (n > 0)) {
                return ack(m - 1, ack(m, n - 1));
            } else
                return n + 1;
        }
        res.send(ack(m, n).toString());

    } catch (error) {
        console.log(error)
        res.json({ success: false })
    }
})

module.exports = router