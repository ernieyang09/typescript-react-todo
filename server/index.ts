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
      }
    });
  } else {
    todos = await Todo.findAll();
  }
  await sleep(1000);
  res.send(todos);
});

app.listen(process.env.PORT || 8080);
