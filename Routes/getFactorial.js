const express = require("express");
const router = express.Router();
const fac = require("../FunctionUnits/factorial");
router.get("/getFactorial", async (req, res) => {
    try {
        let n = req.query.n;
        res.send(fac(n).toString());
    } catch (error) {
        console.log(error)
        res.json({ success: false })
    }
})

module.exports = router