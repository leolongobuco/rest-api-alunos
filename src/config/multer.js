import multer from "multer";
import { extname, resolve } from "path";

const random = () => Math.floor(Math.random() * 10000 + 10000);

const isImage = (typeFile) => {
  if (typeFile === "image/png" || typeFile === "image/jpeg") return true;
};

export default {
  fileFilter: (req, file, callback) => {
    if (!isImage(file.mimetype)) {
      return callback(new multer.MulterError("Arquivo precisa ser PNG ou JPG"));
    }

    return callback(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, resolve(__dirname, "..", "..", "uploads"));
    },
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}_${random()}${extname(file.originalname)}`);
    },
  }),
};