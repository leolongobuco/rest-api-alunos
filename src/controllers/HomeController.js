class HomeController {
  index(req, res) {
    res.status(200).json({
      "tudo certo": true,
    });
  }
}

export default new HomeController();
