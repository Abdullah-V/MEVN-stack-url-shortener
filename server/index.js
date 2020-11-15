const app = require("express")()
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
// const morgan = require("morgan")
const PORT =  3000
const URL_model = require("./models/URL_model")

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(morgan('tiny'))


mongoose
    .connect("mongodb://localhost:27017/db_url",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => {
        console.log("database connected...")})



app.get("/",(req,res) => {
    URL_model.find({},(err,items) => {
        if(err){
            res.send(err)
        }
        else{
            res.send(items)
        }
    })
})

app.post("/shorten",(req,res) => {
    URL_model.create({
        originalURL: req.body.url
    }).then((err,item) => {
        if(err){
            res.send(err)
        }
        else{
            res.send(item)
        }
    })
})

app.get("/:id",(req,res) => {
    var redirectURL = URL_model.findById(req.params.id,(err,item) => {
        if(err){
            console.log(err)
        }
        else{
            res.redirect(item.originalURL)
        }
    })
})

app.listen(PORT,() => {
    console.log(`server running on ${PORT}`)
})
