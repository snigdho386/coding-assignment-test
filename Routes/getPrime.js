const express = require("express");
const nPrime = require("../FunctionUnits/prime");
const router = express.Router();
const isValidQuery = require("../Validation/isNumeric");

router.get("/getPrime", async (req, res) => {
    try {
        let n = req.query.n;
        if (!isValidQuery(n)) {
            res.send({ message: "Enter numbers", success: false });
            return;
        }
        res.send(nPrime(n).toString());

    } catch (error) {
        console.log(error)
        res.json({ success: false })
    }
})

module.exports = router