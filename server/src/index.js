const express = require("express");
const cors = require("cors");

require("dotenv").config();

const SpotifyWebApi = require("spotify-web-api-node");

const app = express();

const PORT = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/spotify/auth", async (req, res) => {
  const { code } = req.body;

  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://127.0.0.1:5173",
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  });

  try {
    const spotifyRes = await spotifyApi.authorizationCodeGrant(code);

    return res.status(200).json({
      accessToken: spotifyRes.body.access_token,
      refreshToken: spotifyRes.body.refresh_token,
      expiresIn: spotifyRes.body.expires_in,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => console.log("Listening on port " + PORT));
