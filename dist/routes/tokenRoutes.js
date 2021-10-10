"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _TokenController = require('../controllers/TokenController'); var _TokenController2 = _interopRequireDefault(_TokenController);
var _logRequests = require('../middlewares/logRequests'); var _logRequests2 = _interopRequireDefault(_logRequests);

const router = new (0, _express.Router)();

router.use(_logRequests2.default);

router.post("/", _TokenController2.default.store);

exports. default = router;
