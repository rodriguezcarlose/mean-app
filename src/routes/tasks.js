const route=require('express').Router();
const mongojs=require('mongojs');

const db=mongojs('mean-db',['tasks']);

route.get('/tasks', (req,res,next) => {
    db.tasks.find((err,tasks) => {
            if (err) return next(err);

            res.json(tasks);

    });
});


route.get('/tasks/:id', (req,res,next) => {
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, (err,tasks) => {
            if (err) return next(err);

            res.json(tasks);

    });
});


route.post('/tasks/', (req,res,next) => {
    const task = req.body;

    db.tasks.save(task, (err,task) => {
            if (err) return next(err);

            res.json(task);

    });
});


route.delete('/tasks/:id', (req,res,next) => {
    console.log(req.params.id);
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, (err,result) => {

        if (err) return next(err);

        res.json(result);
    })
});


route.put('/tasks/:id', (req,res,next) => {
    const task=req.body;
   
    db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, (err,task) => {
        if (err) return next(err);

        res.json(task);
``  });

});


module.exports  = route;
