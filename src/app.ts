import express from "express";
const app = express()

const port = 9999

app.get('/', (req, res) => {
    res.send('Mom! I am writing some code!')
})


app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`App listening in port ${port}`)
})

