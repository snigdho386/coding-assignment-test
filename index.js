const express = require("express")
const app = express()
const PORT = 3000
app.use(express.json());
app.use('/api', require("./Routes/getAckermann"))
app.use('/api', require("./Routes/getFactorial"))
app.use('/api', require("./Routes/getFibonacci"))
app.use('/api',require("./Routes/getPrime"))


app.listen(PORT, () => {
    console.log(`Server is running in PORT : ${PORT}`)
})