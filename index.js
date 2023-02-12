const express = require('express')
const bodyParser=require("body-parser")
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:true}));

app.get('/form', function (req, res) {
  res.sendFile(__dirname + "/indes.html")
})
app.post("/form",function(req,res){
  var n1=req.body.a
  var n2=req.body.b
  var s=n1* n2
  res.send("la somme : " + s)
})  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})