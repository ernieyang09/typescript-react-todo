import * as express from 'express';
import * as bodyParser from 'body-parser';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

import {
  Todo,
} from '../models';


let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const app = express();
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/api/todo', async function(req, res) {
  let todos;
  if (req.query.q) {
    todos = await Todo.findAll({
      where: {
        title: {
          [Op.like]: `%${req.query.q}%`
        }
      },
      order: [
        ['create_at', 'DESC']
      ]
    });
  } else {
    todos = await Todo.findAll({
      order: [
        ['create_at', 'DESC']
      ]
    });
  }
  await sleep(1000);
  res.send(todos);
});

app.post('/api/todo', async function(req, res) {
  const todo = await Todo.create(req.body);

  await sleep(1000);
  res.send(todo);
});

app.get('/api/todo/:todoId', async function(req, res) {
  let todo = await Todo.findOne({where: {id: req.params.todoId}});
  
  await sleep(1000);
  if (todo === null) {
    res.status(404).send();
  } else {
    res.send(todo);
  }
});

app.patch('/api/todo/:todoId', async function(req, res) {
  let todo = await Todo.findOne({where: {id: req.params.todoId}});
  
  await sleep(1000);
  if (todo === null) {
    res.status(404).send();
  } else {
    await todo.update(req.body);
    res.status(204).send();
  }
});

app.delete('/api/todo/:todoId', async function(req, res) {
  let todo = await Todo.findOne({where: {id: req.params.todoId}});
  todo.destroy();
  await sleep(1000);
  res.status(204).send();
});

app.listen(process.env.PORT || 8080);
