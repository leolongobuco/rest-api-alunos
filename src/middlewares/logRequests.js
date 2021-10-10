import appConfig from "../config/appConfig";

export default (req, res, next) => {
  const { method } = req;

  const log = `[METHOD: ${method.toUpperCase()} || URL: ${appConfig.url}]`;
  console.log(log);

  return next();
};
