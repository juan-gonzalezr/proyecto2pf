const express = require('express')
const app =express()
const cors =require('cors')
//settings
app.set('port', process.env.PORT || 4000)

//middlewares
app.use(cors());
app.use(express.json());



//routes
app.use('/Serial/data', require('./routes/data'))
app.use('/Serial/datv', require('./routes/datv'))
app.use('/Serial/dath', require('./routes/dath'))



module.exports =app;