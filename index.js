const express = require("express");
let employeeRoutes=require("./routes/employee_routes");
require("./db/mongoose");
const app = express();
const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:3000"
}
app.use(express.json());
app.use(cors(corsOptions));
app.use(employeeRoutes);

app.get("/",(req,res)=> res.send("You Are Awesome"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
