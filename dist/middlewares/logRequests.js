"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _appConfig = require('../config/appConfig'); var _appConfig2 = _interopRequireDefault(_appConfig);

exports. default = (req, res, next) => {
  const { method } = req;

  const log = `[METHOD: ${method.toUpperCase()} || URL: ${_appConfig2.default.url}]`;
  console.log(log);

  return next();
};
