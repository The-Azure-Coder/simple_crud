const logs = (req, res, next) => {
  switch (req.method) {
    case "GET":
      console.log(`Method: ${req.method}  Path: ${req.path}`);
      break;

    case "PUT":
      console.log(`Method: ${req.method}  Path: ${req.path}`);
      break;

    case "PATCH":
      console.log(`Method: ${req.method}  Path: ${req.path}`);
      break;

    case "POST":
      console.log(`Method: ${req.method}  Path: ${req.path}`);
      break;

    case "DELETE":
      console.log(`Method: ${req.method}  Path: ${req.path}`);
      break;
    default:
      console.log(`Method: ${req.method} Path: ${req.path}`);
  }
  next();
};

module.exports = {
  logs,
};
