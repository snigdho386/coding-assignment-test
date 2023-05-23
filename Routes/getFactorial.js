const express = require("express");
const router = express.Router();
const fac = require("../FunctionUnits/factorial");
const isValidQuery = require("../Validation/isNumeric");

router.get("/getFactorial", async (req, res) => {
    try {
        let n = req.query.n;
        if (!isValidQuery(n)) {
            res.send({ message: "Enter numbers", success: false });
            return;
        }
        res.send(fac(n).toString());
    } catch (error) {
        console.log(error)
        res.json({ success: false })
    }
})

module.exports = router