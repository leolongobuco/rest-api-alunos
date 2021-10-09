import multer from "multer";
import multerConfig from "../config/multer";
import File from "../models/File";

const upload = multer(multerConfig).single("file");

class FileController {
  async store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;
      const file = await File.create({ originalname, filename, aluno_id });
      return res.json(file);
    });
  }
}

export default new FileController();
