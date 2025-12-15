const express = require('express');
const router = express.Router();
const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask
} = require('../controllers/taskController');
const { auth } = require('../middleware/auth');
const { apiLimiter } = require('../middleware/rateLimiter');

router.post('/', apiLimiter, auth, createTask);
router.get('/', apiLimiter, auth, getAllTasks);
router.get('/:id', apiLimiter, auth, getTaskById);
router.put('/:id', apiLimiter, auth, updateTask);
router.delete('/:id', apiLimiter, auth, deleteTask);

module.exports = router;
