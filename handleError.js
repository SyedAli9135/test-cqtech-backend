module.exports = (callback) => {
  return async (req, res) => {
    try {
      await callback(req, res);
    } catch (error) {
      res.status(500).send(error);
    }
  };
};
