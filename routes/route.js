import express, { Router } from 'express';


import { addTodo, getAllTodoData, toggleTodoDone, updateTodo, deleteTodo } from '../controller/todo-controller.js';

const route = express.Router();


route.post('/todo', addTodo)
route.get('/todo', getAllTodoData);
route.get('/todo/:id', toggleTodoDone);
route.put('/todo/:id', updateTodo);
route.delete('/todo/:id', deleteTodo);


export default route;