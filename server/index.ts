import * as express from 'express';
import * as bodyParser from 'body-parser';

import {
  Todo,
} from '../models';


const app = express();
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/api/todo', async function(req, res) {
  const todos = await Todo.findAll();
  res.send(todos);
});

app.listen(process.env.PORT || 8080);
