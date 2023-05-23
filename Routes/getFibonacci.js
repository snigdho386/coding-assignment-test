const express = require("express");
const router = express.Router();
const fib = require("../FunctionUnits/fibonacci")
router.get("/getFibonacci", async (req, res) => {
    try {

        let n = req.query.n;
        res.send(fib(n).toString());

    } catch (error) {
        console.log(error)
        res.json({ success: false })
    }
})

module.exports = router