let express = require("express");
let app = express();
app.use(express.static(".."));
app.listen(3000, () => console.log("listening on port 3000"));
