const express = require("express")
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3001

//middleware
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors({origin: '*'}))


app.use("/", (req, res) => {
    res.send("connected to backend")
})

app.listen(PORT, console.log(`listening on port ${PORT}`))