class HomeController {
  index(req, res) {
    res.status(200).json({
      "tudo certo": true,
    });
  }

  store(req, res) {
    res.status(201).json({
      "objeto criado": true,
    });
  }
}

export default new HomeController();
