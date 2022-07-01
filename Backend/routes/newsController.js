const express = require("express");
const Task = require("../models/Noticia");

const router1 = express.Router();

router1.get("/", async (req, res) => {
    try{
        const tasks = await Task.find();
        res.json(tasks)
    } catch(err){
        res.json({message: err})
    }
});

router1.get("/:taskId", async (req, res) => {
    try{
        const task = await Task.findById(req.params.taskId);
        res.json(task)
    } catch(err){
        res.json({message: err})
    }
});

router1.post("/", async (req, res) => {
    const task = new Task({
        titulo: req.body.titulo,
        cuerpo: req.body.cuerpo,
        date: req.body.date
    });
    try{
        const savedTask = await task.save();
        res.json(savedTask)
    } catch(err){
        res.json({message: err})
    }
});

router1.patch("/:taskId", async (req, res) => {
    try{
        const updatedTask = await Task.updateOne(
            {_id: req.params.taskId},
            {$set: {cuerpo: req.body.cuerpo}}
        );
        res.json(updatedTask)
    } catch(err){
        res.json({message: err})
    }
});

router1.delete("/:taskId", async (req, res) => {
    try{
        const removedTask = await Task.remove({_id: req.params.taskId});
        res.json(removedTask)
    } catch(err){
        res.json({message: err})
    }
});

module.exports = router1;