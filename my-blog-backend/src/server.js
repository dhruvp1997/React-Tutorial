import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
//simple get request 
app.get('/hello', (req, res) => res.send('Hello!'));
//get request using url/name or id
app.get('/hello/:name', (req,res)=> res.send(`Hello ${req.params.name}`));
//post request with name
app.post('/hello',(req,res) => res.send(`Hello ${req.body.name}`));

app.listen(8000,()=> console.log('Listening on port 8000'));