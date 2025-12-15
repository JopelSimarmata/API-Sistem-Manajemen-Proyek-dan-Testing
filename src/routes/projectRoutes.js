const express = require('express');
const router = express.Router();
const {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject
} = require('../controllers/projectController');
const { auth, authorize } = require('../middleware/auth');
const { apiLimiter } = require('../middleware/rateLimiter');

router.post('/', apiLimiter, auth, authorize('admin', 'manager'), createProject);
router.get('/', apiLimiter, auth, getAllProjects);
router.get('/:id', apiLimiter, auth, getProjectById);
router.put('/:id', apiLimiter, auth, authorize('admin', 'manager'), updateProject);
router.delete('/:id', apiLimiter, auth, authorize('admin', 'manager'), deleteProject);

module.exports = router;
