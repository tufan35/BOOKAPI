const errorMiddleware = (err, req, res, next) => {
    console.error(err); 
  
    if (err.name === "DuplicateBookError") {
      return res.status(400).json({ error: err.message });
    }
  
    return res.status(500).json({ error: "Internal Server Error" });
  };
  
  module.exports = errorMiddleware;
  