export default (req, res, next) => {
  const { method, url } = req;

  const log = `[METHOD: ${method.toUpperCase()} || URL: ${url}]`;
  console.log(log);

  return next();
};
