const { timeStamp } = require("console")
const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express()

const date = new Date()
const time =  date.toLocaleString()


if(!fs.existsSync("date")) {
    fs.mkdirSync("date")
    fs.writeFile(path.resolve("date", "timestamp.txt"), `${time}`, (err) => {
        if(err) {
            console.log(err)
        }
    })
} else {
    fs.writeFile(path.resolve("date", "timestamp.txt"), `${time}`, (err) => {
        if(err) {
            console.log(err)
        }
    })
}

app.get("/date", ( req, res) => {
    res.sendFile(path.resolve(__dirname, "date", "timestamp.txt"))
})

app.listen( process.env.PORT || 5000, () => {
    console.log("Server is working...")
})
