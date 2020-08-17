const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();
const appRouter = require('./routes/index');
const appTasks  = require('./routes/tasks');


//settings

app.set('port', process.env.PORT||3000);
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));


//middleware
app.use(cors());
app.use(express.json());

//routes
app.use(appRouter);
app.use('/api', appTasks);

app.listen(app.get('port'), (req,res)=> {
    console.log("Servidor sobre puerto ", app.get('port'));
    
});


console.log("node inicia");