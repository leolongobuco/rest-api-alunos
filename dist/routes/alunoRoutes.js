"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AlunoController = require('../controllers/AlunoController'); var _AlunoController2 = _interopRequireDefault(_AlunoController);
var _logRequests = require('../middlewares/logRequests'); var _logRequests2 = _interopRequireDefault(_logRequests);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.use(_logRequests2.default);

router.post("/", _loginRequired2.default, _AlunoController2.default.store);
router.get("/", _AlunoController2.default.index);
router.get("/:userId", _AlunoController2.default.show);
router.put("/:userId", _loginRequired2.default, _AlunoController2.default.update);
router.delete("/:userId", _loginRequired2.default, _AlunoController2.default.delete);

exports. default = router;
