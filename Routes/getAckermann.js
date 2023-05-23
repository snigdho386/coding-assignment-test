const express = require("express");
const router = express.Router();
const ack = require("../FunctionUnits/ackermann");

router.get("/getAckermann", async (req, res) => {
    try {
        let m = req.query.m;
        let n = req.query.n;
        res.send(ack(m, n).toString());

    } catch (error) {
        console.log(error)
        res.json({ success: false })
    }
})

module.exports = router