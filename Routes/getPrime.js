const express = require("express");
const nPrime = require("../FunctionUnits/prime");
const router = express.Router();

router.get("/getPrime", async (req, res) => {
    try {
        let n = req.query.n;
        res.send(nPrime(n).toString());

    } catch (error) {
        console.log(error)
        res.json({ success: false })
    }
})

module.exports = router