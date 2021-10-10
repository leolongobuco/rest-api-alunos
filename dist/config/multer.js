"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');

const random = () => Math.floor(Math.random() * 10000 + 10000);

const isImage = (typeFile) => {
  return typeFile === "image/png" || typeFile === "image/jpeg";
};

exports. default = {
  fileFilter: (req, file, callback) => {
    if (!isImage(file.mimetype)) {
      return callback(new _multer2.default.MulterError("Arquivo precisa ser PNG ou JPG"));
    }

    return callback(null, true);
  },
  storage: _multer2.default.diskStorage({
    destination: (req, file, callback) => {
      callback(null, _path.resolve.call(void 0, __dirname, "..", "..", "uploads", "images"));
    },
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}_${random()}${_path.extname.call(void 0, file.originalname)}`);
    },
  }),
};
