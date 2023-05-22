const express = require("express");
const router = express.Router();

router.get("/getFactorial", async (req, res) => {
    try {

        let n = req.query.n;
        let fac = function (n) {
            if (n <= 1)
                return 1;
            return n * fac(n - 1);
        }
        res.send(fac(n).toString());

    } catch (error) {
        console.log(error)
        res.json({ success: false })
    }
})

module.exports = router