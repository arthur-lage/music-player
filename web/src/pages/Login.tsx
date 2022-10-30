import { SpotifyLogo } from "phosphor-react";

import HappyMusic from "../assets/happy-music.svg";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=b4764d0aec7e4908ae436d7b5acc96f6&response_type=code&redirect_uri=http://127.0.0.1:5173&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export function Login() {
  return (
    <div className="min-h-[100vh] bg-gradient-to-b from-purple-200 flex items-center justify-center flex-col">
      <h1 className="font-bold font-poppins text-4xl text-gray-900">
        Music Player
      </h1>

      <img
        className="w-[225px] my-16"
        src={HappyMusic}
        alt="Happy character listening to music"
      />

      <a
        className="transition-all duration-150 hover:bg-purple-700 flex items-center gap-2 w-25 h-10 p-6 rounded-md font-poppins font-medium uppercase tracking-wider bg-purple-500 text-lg text-white"
        target="_blank"
        href={AUTH_URL}
      >
        <SpotifyLogo color="#fff" size={32} />
        Login with Spotify
      </a>
    </div>
  );
}
