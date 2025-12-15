const express = require('express');
const router = express.Router();
const {
  createTestCase,
  getAllTestCases,
  getTestCaseById,
  updateTestCase,
  executeTestCase,
  deleteTestCase
} = require('../controllers/testCaseController');
const { auth } = require('../middleware/auth');
const { apiLimiter } = require('../middleware/rateLimiter');

router.post('/', apiLimiter, auth, createTestCase);
router.get('/', apiLimiter, auth, getAllTestCases);
router.get('/:id', apiLimiter, auth, getTestCaseById);
router.put('/:id', apiLimiter, auth, updateTestCase);
router.post('/:id/execute', apiLimiter, auth, executeTestCase);
router.delete('/:id', apiLimiter, auth, deleteTestCase);

module.exports = router;
