const express = require("express");
const cors = require("cors")

const app = express();

const PORT = process.env.PORT || 3030

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/spotify/auth", (req, res) => {
  const { code } = req.body

  try {
    return res.status(200).json({ message: "Ok"})
  } catch(err) {
    return res.status(500).json({ message: err.message })
  }
})

app.listen(PORT, () => console.log("Listening on port " + PORT));
