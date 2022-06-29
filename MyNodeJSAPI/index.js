const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')

const app = express()

const port = process.env.port || 5000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors({origin: '*'}))

app.get("/", (req, res) => {
    res.send("Hello World")
})

const apiPrefix = '/api/v1/'
const personRoutes = require('./src/routes/person.routes')
// using as middleware
app.use(`${apiPrefix}people`, personRoutes)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})