const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "user2"] })
})

app.listen(5000, () => { console.log("server connected on port 5000") })