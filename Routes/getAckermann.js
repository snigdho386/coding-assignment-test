const express = require("express");
const router = express.Router();
const ack = require("../FunctionUnits/ackermann");
const isValidQuery = require("../Validation/isNumeric");
router.get("/getAckermann", async (req, res) => {
    let m = req.query.m;
    let n = req.query.n;
    try {
        if (!isValidQuery(m) || !isValidQuery(n)) {
            res.send({ message: "Enter numbers", success: false });
            return;
        }
        res.send(ack(m, n).toString());

    } catch (error) {
        console.log(error)
        res.json({ success: false })
    }
})

module.exports = router