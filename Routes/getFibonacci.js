const express = require("express");
const router = express.Router();
const fib = require("../FunctionUnits/fibonacci")
const isValidQuery = require("../Validation/isNumeric");
router.get("/getFibonacci", async (req, res) => {
    try {

        let n = req.query.n;
        if (!isValidQuery(n)) {
            res.send({ message: "Enter numbers", success: false });
            return;
        }
        res.send(fib(n).toString());

    } catch (error) {
        console.log(error)
        res.json({ success: false })
    }
})

module.exports = router