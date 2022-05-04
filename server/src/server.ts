import express from 'express';

const app = express();
app.use(express.json())
app.post('/feedbacks', (req,res) => {
    return res.send("hello world");
});

app.listen(4444, () => {
    console.log("server running");
})