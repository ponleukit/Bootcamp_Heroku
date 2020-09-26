const { text } = require('body-parser');
const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

// Get Takelist
router.get('/', async (req, res)=> {
    const mytasks = await loadTasksCollection();
    res.send( await mytasks.find({}).toArray() )
});
// Add Takelist 
router.post('/', async (req, res)=>{
    const mytasks = await loadTasksCollection();
    await mytasks.insertOne({
        task: req.body.task,
        createdAt: new Date(),
    });
    res.status(201).send()
})
//Delete Takelist
router.delete('/:id', async (req, res)=>{
    const mytasks = await loadTasksCollection();
    await mytasks.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})

async function loadTasksCollection(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://sreanponleu:1234@sreanponleu.igium.mongodb.net/sreanponleu?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    return client.db('sreanponleu').collection('mytasks');
}
module.exports = router;