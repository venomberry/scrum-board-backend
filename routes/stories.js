var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([
    {
      id: 1, name: 'Story1',
      tasks: [
        { id: 1, name: 'Task1', state: 'not-started' },
        { id: 2, name: 'Task2', state: 'in-progress' },
        { id: 3, name: 'Task3', state: 'done' }]
    },
    {
      id: 2, name: 'Story2',
      tasks: [
        { id: 4, name: 'Task1', state: 'not-started' },
        { id: 5, name: 'Task2', state: 'in-progress' },
        { id: 6, name: 'Task3', state: 'done' }]
    },
    {
      id: 3, name: 'Story3',
      tasks: [
        { id: 7, name: 'Task1', state: 'not-started' },
        { id: 8, name: 'Task2', state: 'in-progress' },
        { id: 9, name: 'Task3', state: 'done' }]
    },
    {
      id: 4, name: 'Story4',
      tasks: [
        { id: 10, name: 'Task1', state: 'not-started' },
        { id: 11, name: 'Task2', state: 'in-progress' },
        { id: 12, name: 'Task3', state: 'done' }]
    }
  ]);
});

module.exports = router;
