const app = require('./infrastructure/express');
const mongoose = require('./infrastructure/mongodb/mongoose')

const errorMiddleware = require("./infrastructure/middlewares/errorMiddleware");


//Error Middleware
app.use(errorMiddleware);

app.use((err, req, res, next) => {
  console.error(err); 
  res.status(500).json({ error: "Internal Server Error" });
});

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

//Server Listening
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
